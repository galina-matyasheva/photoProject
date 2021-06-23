import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import PopUp from "../PopUp/PopUp";
import "./ListPhotos.css";

let currentIndex = 0;

const ListPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  let history = useHistory();

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
      });
  }, []);

  const onClickDetailImg = (e) => {
    setImgUrl(photos[e.target.id].url);
    currentIndex = +e.target.id;
    setShowPopUp(true);
  };

  const onclickClosePopUp = () => {
    setShowPopUp(false);
  };

  const onClickNext = () => {
    if (currentIndex >= photos.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    setImgUrl(photos[currentIndex].url);
  };

  const onClickBack = () => {
    if (currentIndex <= 0) {
      currentIndex = photos.length - 1;
    } else {
      currentIndex--;
    }
    setImgUrl(photos[currentIndex].url);
  };

  return (
    <div className="list-photos-container"> 
    <p
        onClick={() => {
          history.push("/albums");
        }}
      >
        <i class="fas fa-backward"></i>
        <span>Back to list of albums</span>
      </p>
     <div className="list-photos-wrap-content">
     
      {photos.map((photo, index) => (
        <div key={`photo-${index}`} className="list-photos-content">
          <div
            onClick={(e) => {
              onClickDetailImg(e);
            }}
          >
            <img 
            id={`${index}`} 
            src={photo.thumbnailUrl} 
            alt="img"
            className="list-photos-img"
            />
          </div>
        </div>
      ))}
      {showPopUp ? (
        <PopUp
          onClickNext={onClickNext}
          onClickBack={onClickBack}
          onclickClosePopUp={onclickClosePopUp}
          imgUrl={imgUrl}
        />
      ) : null}
    </div>
    </div>
   
  );
};

export default ListPhotos;
