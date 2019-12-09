import React, { useState, useEffect } from "react";
import "./inventory.css";
import useModal from '../shop/useModal';
import InventoryModal from "./inventoryModal";

export default function Inventory(prop) {

    const [inventoryList, ] = useState([])
    const [, setForceRender] = useState("")
    const {isShowing, toggle} = useModal();
    const [currentItem, setCurrentItem] = useState()
    const [equipText, setEquipText] = useState()
    const [emptyInventory, setEmptyInventory] = useState(false)

    // Renders inventory items once
    useEffect(() => {
        setForceRender(1)
        for (var i = 0; i < prop.inventory.length; i++)
        {
            inventoryList.push(prop.inventory[i])
        }
    }, []);


    // Opens modal and shows the item
    function openItem(item){
        setCurrentItem(item)

        // If the item is alrdy equipped, button will say unequip instead of equip
        if(item.style === "color"){
            if(prop.chatBotColor === item.color){
                console.log("HEY")
                setEquipText("Pois käytöstä")
            } else {
                setEquipText("Käytä")
            }
        }
        if(item.style === "bgColor"){
            if(prop.chatBotBgColor === item.color){
                console.log("HEY")
                setEquipText("Pois käytöstä")
            } else {
                setEquipText("Käytä")
            }
        }

        toggle()
    }


    // Equips and unequips chosen item
    function equipItem(item){
        if(item.style === "color"){
            if(prop.chatBotColor === item.color){
                prop.setChatBotColor("#f76f07")
            } else {
            prop.setChatBotColor(item.color)
            }
        }
        if(item.style === "bgColor"){
            if(prop.chatBotBgColor === item.color){
                prop.setChatBotBgColor("#FFFF")
            } else {
            prop.setChatBotBgColor(item.color)
            }
        }
        toggle()
    }

    // Shows message if there is no items in invetory
    if(prop.inventory.length === 0 && emptyInventory === false){
        setEmptyInventory(true)
    }

    return(
        <div>
            <div className="inventoryText"> Tavaraluettelo </div>
            { emptyInventory && <div className="inventory_emptyInventory">Et ole vielä ostanut tavaroita. Käy kauppa sivulla ostamassa jotain!</div>}
            <ul className="inventoryList">
                {inventoryList.map(item => (
                    <li key={item.id} onClick={() => openItem(item)}>
                        <div className="inventoryItem_container">
                        <div className="inventory_img" style={{background: item.color}}></div>
                            <div className="inventoryItem_box">
                                <a className="inventory_name">{item.name}</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <InventoryModal
            isShowing={isShowing}
            hide={toggle}
            item={currentItem}
            equipItem={equipItem}
            equipText={equipText}
            />
        </div>
    );
}