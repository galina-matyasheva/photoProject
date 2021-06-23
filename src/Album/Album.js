import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";

import ListPhotos from "../ListPhotos/ListPhotos";
import "./Album.css";

const Album = () => {
  const [albums, setAlbums] = useState([]);

  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?userId=2")
      .then((response) => response.json())
      .then((newAlbums) => {
        newAlbums.forEach((album) => {
         fetch(
            `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`
          )
            .then((response) => response.json())
            .then((photos) => {
              album.photoCount = photos.length;
              album.headImage = photos[0].url;
              setAlbums(newAlbums);
              forceUpdate();
            });
        });
        setAlbums(newAlbums);
      });
  }, []);

  return (
    <div className="album-container">
      {albums.map((album, index) => (
        <div key={`album-${index}`} className="album-content">
          <img
            src={`${album.headImage}`}
            className="album-img"
            alt="album-img"
          />
          <div className="album-text">
            <p className="album-link">
              <Link to={`listPhotos/${album.id}`}>{album.title}</Link>
            </p>
            <p>({album.photoCount} photos)</p>
          </div>
        </div>
      ))}
      <Switch>
        <Route path="listPhotos/:id" children={<ListPhotos />} />
      </Switch>
    </div>
  );
};

export default Album;
