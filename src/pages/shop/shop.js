import React, { useState, useEffect } from "react";
import "./shop.css";
import Modal from "./shopModal";
import useModal from './useModal';
let shopData = require("./shop.json");

export default function Shop(prop) {
    let money = 100000
    const [currentItem, setCurrentItem] = useState()
    const [, setForceRender] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [emptyShop, setEmptyShop] = useState(false)
    const [showColorHeader, setShowColorHeader] = useState(true)
    const [showBgColorHeader, setShowBgColorHeader] = useState(true)
    const {isShowing, toggle} = useModal();
    
    // Renders shop items once. Uses global variable shopItems to store items that are in the shop.
    useEffect(() => {
        
        if(prop.shopItemsColor[0] === "noItems" && prop.shopItemsBgColor[0] === "noItems"){
            prop.shopItemsColor.pop()
            prop.shopItemsBgColor.pop()
            for (var i = 0; i < shopData.length; i++)
            {
                if(shopData[i].style === "color"){
                    prop.setShopItemsColor(shopData[i])
                }

                if(shopData[i].style === "bgColor"){
                    prop.setShopItemsBgColor(shopData[i])
                }
            }
        }
        setForceRender(1)
    }, []);

    // Opens modal and shows the item
    function openItem(item){
        toggle()
        setCurrentItem(item)
    }

    // Handles item buying, if user doesn't have enough money, shows error msg
    function buyItem(item){
        if(prop.money >= item.price){
            console.log("BOUGHT")

            // Removes money amount that the item costs
            prop.setMoney(-item.price)

            // Sets bought item into inventory
            prop.setInventory(item)

            // Equips bought color and removes the color from the global variable that holds items that are in the shop
            if(item.style === "color"){
                prop.removeShopItemsColor(item)
                prop.setChatBotColor(item.color)
            }
            if(item.style === "bgColor"){
                prop.removeShopItemsBgColor(item)
                prop.setChatBotBgColor(item.color)
            }

            toggle()
        } else {
            setErrorMsg("Sinulla ei riitä rahat kyseiseen tuotteeseen.")
        }
    }

    // Removes error msg and closes modal
    function goBack(){
        setErrorMsg("")
        toggle()
    }

    // Shows message if there is no more items in the shop
    if(prop.shopItemsColor.length === 0 && emptyShop === false && prop.shopItemsBgColor.length === 0){
        setEmptyShop(true)
    }


    if( prop.shopItemsColor.length === 0 && showColorHeader === true){
        setShowColorHeader(false)
    }

    if( prop.shopItemsBgColor.length === 0 && showBgColorHeader === true){
        setShowBgColorHeader(false)
    }

    return (
        <div>
            <div className="shopText"> Kauppa </div>
            <div className="shop_moneyAmount">Rahaa:&nbsp;{prop.money}G</div>
            { emptyShop && <div className="shop_emptyShop">Kauppa on tyhjä, tule myöhemmin uudelleen. Uusia tavaroita lisätään pian!</div>}

            { showColorHeader && <div className="shop_subheader"> Chatbot värit</div> }
            <ul className="shopList">
                {prop.shopItemsColor.map(item => (
                    <li key={item.id} onClick={()=> openItem(item)}>
                        <div className="shopItem_container">
                        <div className="shop_img" style={{background: item.color}}></div>
                            <div className="shopItem_box">
                                <a className="shop_name">{item.name}</a>
                                <a className="shop_price">Hinta: {item.price}G</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {showBgColorHeader && <div className="shop_subheader"> Chatbot taustakuvat</div>}
            <ul className="shopList">
                {prop.shopItemsBgColor.map(item => (
                    <li key={item.id} onClick={()=> openItem(item)}>
                        <div className="shopItem_container">
                        <div className="shop_img" style={{background: item.color}}></div>
                            <div className="shopItem_box">
                                <a className="shop_name">{item.name}</a>
                                <a className="shop_price">Hinta: {item.price}G</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal
            isShowing={isShowing}
            hide={toggle}
            item={currentItem}
            buyItem={buyItem}
            errorMsg={errorMsg}
            goBack = {goBack}
            />
        </div>
      );
}