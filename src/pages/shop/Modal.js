import React from 'react';
import ReactDOM from 'react-dom';
import "./modal.css";
import shopImg from "./shopImg.png"

const Modal = ({ isShowing, hide, item, buyItem, errorMsg, goBack }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="shop_modal_overlay"/>
    <div className="shop_modal_wrapper">
      <div className="shop_modal">
      <img className="modal_img" src={shopImg} ></img>
        <div className="shop_modalName">
            {item.name}
        </div>
        <div className="shop_modalPrice">
            Hinta: {item.price}G
        </div>

        <div className="shop_buttonContainers">
        <div className="shop_modal_backButton_container">
        <button type="button" className="shop_modal_close_button" onClick={() => goBack()}>
            Takaisin
        </button>
        </div>

        <div className="shop_modal_buyButton_container">
        <button type="button" className="shop_modal_buy_button" onClick={() => buyItem(item)}>
            Osta
        </button>
        </div>
        </div>
        <div className="shop_modal_errorMsgContainer">
        <small className="shop_modal_errorMsg">{errorMsg}</small>
        </div>

      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;