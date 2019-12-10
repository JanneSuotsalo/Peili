import React, { useState, useEffect } from "react";
import "./inventory.css";
import useModal from '../shop/useModal';
import InventoryModal from "./inventoryModal";
import I18n from "../../components/Element/LanguageSwticher/I18n";

export default function Inventory(prop) {

    const [inventoryListColor, ] = useState([])
    const [inventoryListBgColor, ] = useState([])
    const [, setForceRender] = useState("")
    const {isShowing, toggle} = useModal();
    const [currentItem, setCurrentItem] = useState()
    const [equipText, setEquipText] = useState()
    const [emptyInventory, setEmptyInventory] = useState(false)
    const [showColorHeader, setShowColorHeader] = useState(false)
    const [showBgColorHeader, setShowBgColorHeader] = useState(false)

    // Renders inventory items once. Handles removing message "no items in inventory". Also handles showing subheaders.
    useEffect(() => {
        setForceRender(1)
        for (var i = 0; i < prop.inventory.length; i++)
        {
            if(prop.inventory[i].style === "color"){
                inventoryListColor.push(prop.inventory[i])
                setShowColorHeader(true)
                setEmptyInventory(false)
            }

            if(prop.inventory[i].style === "bgColor"){
                inventoryListBgColor.push(prop.inventory[i])
                setShowBgColorHeader(true)
                setEmptyInventory(false)
            }
        }
    }, []);

    // Opens modal and shows the item
    function openItem(item){

        // Sets current item so that modal knows which item to show
        setCurrentItem(item)

        // If the item is alrdy equipped, button will say unequip instead of equip
        if(item.style === "color"){
            if(prop.chatBotColor === item.color){
                setEquipText(I18n.t("inventory.unequip"))
            } else {
                setEquipText(I18n.t("inventory.equip"))
            }
        }
        if(item.style === "bgColor"){
            if(prop.chatBotBgColor === item.color){
                setEquipText(I18n.t("inventory.unequip"))
            } else {
                setEquipText(I18n.t("inventory.equip"))
            }
        }
        toggle()
    }


    // Equips and unequips chosen item. If item is unequiped, sets default color back for chatbot
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
    if(showBgColorHeader === false && emptyInventory === false && showColorHeader === false){
        setEmptyInventory(true)
    }

    return(
        <div>
            <div className="inventoryText"> {I18n.t("inventory.InventoryTitle")} </div>
            { emptyInventory && <div className="inventory_emptyInventory">{I18n.t("inventory.emptyInventory")}</div>}

            { showColorHeader && <div className="inventory_subheader">{I18n.t("inventory.chatBotColor")}</div> }
            <ul className="inventoryList">
                {inventoryListColor.map(item => (
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
                
            {showBgColorHeader && <div className="inventory_subheader"> {I18n.t("inventory.chatBotBgColor")}</div>}
            <ul className="inventoryList">
                {inventoryListBgColor.map(item => (
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