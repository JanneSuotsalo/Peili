import React from 'react';
import ReactDOM from 'react-dom';
import "./inventoryModal.css";

const Modal = ({ isShowing, hide, item, equipItem, equipText }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="inventory_modal_overlay"/>
    <div className="inventory_modal_wrapper">
      <div className="inventory_modal">
      <div className="inventory_modal_img" style={{background: item.color}} ></div>
        <div className="inventory_modalName">
            {item.name}
        </div>

        <div className="inventory_buttonContainers">
        <div className="inventory_modal_backButton_container">
        <button type="button" className="inventory_modal_close_button" onClick={hide}>
            Takaisin
        </button>
        </div>

        <div className="inventory_modal_buyButton_container">
        <button type="button" className="inventory_modal_buy_button" onClick={() => equipItem(item)}>
            {equipText}
        </button>
        </div>
        </div>

      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;