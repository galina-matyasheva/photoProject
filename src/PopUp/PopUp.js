import React from "react";

import "./PopUp.css";


const PopUp = ({ onclickClosePopUp, imgUrl, onClickNext, onClickBack }) => {
  return (
    <div className="pop-up-container">
      <div className="pop-up-inner">
        <div className="pop-up-content">
          <div
            className="pop-up-close"
            onClick={() => {
              onclickClosePopUp();
            }}
          >
            <span>
              <i class="fas fa-times"></i>
            </span>
          </div>
          <div className="pop-up-photos">
            <p
              onClick={() => {
                onClickBack();
              }}
            >
              <i class="fas fa-backward"></i>
            </p>
            <img 
            src={`${imgUrl}`} 
            alt="img"
            className="pop-up-img" 
            />
            <p
              onClick={() => {
                onClickNext();
              }}
            >
              <i class="fas fa-forward"></i>
            </p>
          </div>
        </div>
      </div>
      popup
    </div>
  );
};

export default PopUp;
