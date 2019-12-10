import React, { useState, useEffect } from "react";
import "./shop.css";
import Modal from "./Modal";
import useModal from './useModal';
import shopImg from "./shopImg.png"
let shopData = require("./shop.json");

export default function Shop() {
    const [shopList] = useState([])
    const [currentItem, setCurrentItem] = useState()
    const [, setForceRender] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const {isShowing, toggle} = useModal();
    let money = 1000;

    useEffect(() => {
        setForceRender(1)
        for (var i = 0; i < shopData.length; i++)
        {
            shopList.push(shopData[i])
        }
    }, [shopList]);
        
    function openItem(item){
        console.log(item)
        toggle(true)
        setCurrentItem(item)
    }

    function buyItem(item){
        console.log("function Works")
        console.log(money)
        console.log(item.price)
        if(money >= item.price){
            console.log("BOUGHT")
            shopList.splice( shopList.indexOf(item),1 )
            toggle()
        } else {
            setErrorMsg("Sinulla ei riitä rahat kyseiseen tuotteeseen.")
        }
    }

    function goBack(){
        setErrorMsg("")
        toggle()
    }

    return (
        <div>
            <div className="shopText"> Kauppa </div>
            <ul className="shopList">
                {shopList.map(item => (
                    <li key={item.id} onClick={()=> openItem(item)}>
                        <div className="shopItem_container">
                        <img alt="shop" className="shop_img" src={shopImg} ></img>
                            <div className="shopItem_box">
                                <div className="shop_name">{item.name}</div>
                                <div className="shop_price">Hinta: {item.price}G</div>
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