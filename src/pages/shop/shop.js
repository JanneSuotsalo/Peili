import React, { useState, useEffect } from "react";
import "./shop.css";
import Modal from "./shopModal";
import useModal from "./useModal";
import I18n from "../../components/Element/LanguageSwticher/I18n";
let shopData = require("./shop.json");

export default function Shop(prop) {
  const [shopList] = useState([]);
  const [currentItem, setCurrentItem] = useState();
  const [, setForceRender] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [emptyShop, setEmptyShop] = useState(false);
  const [showColorHeader, setShowColorHeader] = useState(true);
  const [showBgColorHeader, setShowBgColorHeader] = useState(true);
  const { isShowing, toggle } = useModal();

  // Renders shop items once. Uses global variables to store items that are in the shop.
  useEffect(() => {
    if (
      prop.shopItemsColor[0] === "noItems" &&
      prop.shopItemsBgColor[0] === "noItems"
    ) {
      prop.shopItemsColor.pop();
      prop.shopItemsBgColor.pop();
      for (var i = 0; i < shopData.length; i++) {
        if (shopData[i].style === "color") {
          prop.setShopItemsColor(shopData[i]);
        }

        if (shopData[i].style === "bgColor") {
          prop.setShopItemsBgColor(shopData[i]);
        }
      }
    }
    setForceRender(1);
  }, [shopList, prop]);

  // Opens modal and shows the item
  function openItem(item) {
    toggle();
    setCurrentItem(item);
  }

  // Handles item buying, if user doesn't have enough money, shows error message
  function buyItem(item) {
    if (prop.money >= item.price) {
      // Removes money amount that the item costs
      prop.setMoney(-item.price);

      // Sets bought item into inventory
      prop.setInventory(item);

      // Equips bought item and removes the item from the global variable that holds items that are in the shop
      if (item.style === "color") {
        prop.removeShopItemsColor(item);
        prop.setChatBotColor(item.color);
      }
      if (item.style === "bgColor") {
        prop.removeShopItemsBgColor(item);
        prop.setChatBotBgColor(item.color);
      }

      toggle();
    } else {
      setErrorMsg(I18n.t("shop.shopNoMoneyError"));
    }
  }

  // Removes error msg and closes modal
  function goBack() {
    setErrorMsg("");
    toggle();
  }

  // Shows message if there is no more items in the shop
  if (
    prop.shopItemsColor.length === 0 &&
    emptyShop === false &&
    prop.shopItemsBgColor.length === 0
  ) {
    setEmptyShop(true);
  }

  // Handles removing subheader "Chatbot värit"
  if (prop.shopItemsColor.length === 0 && showColorHeader === true) {
    setShowColorHeader(false);
  }

  // Handles removing subheader "Chatbot taustakuvat"
  if (prop.shopItemsBgColor.length === 0 && showBgColorHeader === true) {
    setShowBgColorHeader(false);
  }

  return (
    <div>
      <div className="shopText"> {I18n.t("shop.shopTitle")} </div>
      <div className="shop_moneyAmount">
        {I18n.t("shop.shopMoney")} {prop.money}G
      </div>
      {emptyShop && (
        <div className="shop_emptyShop">{I18n.t("shop.emptyShop")}</div>
      )}

      {showColorHeader && (
        <div className="shop_subheader"> {I18n.t("shop.chatBotColor")}</div>
      )}
      <ul className="shopList">
        {prop.shopItemsColor.map(item => (
          <li key={item.id} onClick={() => openItem(item)}>
            <div className="shopItem_container">
              <div
                className="shop_img"
                style={{ background: item.color }}
              ></div>
              <div className="shopItem_box">
                <div className="shop_name">{item.name}</div>
                <div className="shop_price">
                  {I18n.t("shop.price")} {item.price}G
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showBgColorHeader && (
        <div className="shop_subheader"> {I18n.t("shop.chatBotBgColor")}</div>
      )}
      <ul className="shopList">
        {prop.shopItemsBgColor.map(item => (
          <li key={item.id} onClick={() => openItem(item)}>
            <div className="shopItem_container">
              <div
                className="shop_img"
                style={{ background: item.color }}
              ></div>
              <div className="shopItem_box">
                <div className="shop_name">{item.name}</div>
                <div className="shop_price">
                  {I18n.t("shop.price")} {item.price}G
                </div>
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
        goBack={goBack}
      />
    </div>
  );
}
