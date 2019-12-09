import React, { useState, useEffect } from "react";
import "./shop.css";
import Modal from "./shopModal";
import useModal from './useModal';
let shopData = require("./shop.json");

export default function Shop(prop) {

    const [currentItem, setCurrentItem] = useState()
    const [, setForceRender] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [emptyShop, setEmptyShop] = useState(false)
    const {isShowing, toggle} = useModal();
    
    // Renders shop items once. Uses global variable shopItems to store items that are in the shop.
    useEffect(() => {
        console.log(prop.shopItems)
        if(prop.shopItems[0] === "noItems"){
            prop.shopItems.pop()
            for (var i = 0; i < shopData.length; i++)
            {
                prop.setShopItems(shopData[i])
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

            // Removes bought item from the list
            prop.removeShopItem(item)

            // Sets bought item into inventory
            prop.setInventory(item)

            // Equips bought color
            if(item.style === "color"){
                prop.setChatBotColor(item.color)
            }
            if(item.style === "bgColor"){
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
    if(prop.shopItems.length === 0 && emptyShop === false){
        setEmptyShop(true)
    }
    

    return (
        <div>
            <div className="shopText"> Kauppa </div>
            <div className="shop_moneyAmount">Rahaa:&nbsp;{prop.money}G</div>
            { emptyShop && <div className="shop_emptyShop">Kauppa on tyhjä, tule myöhemmin uudelleen. Uusia tavaroita lisätään pian!</div>}
            <ul className="shopList">
                {prop.shopItems.map(item => (
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