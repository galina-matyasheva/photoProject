import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Album from "./Album/Album";
import ListPhotos from "./ListPhotos/ListPhotos";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <main className="app-main">
        <Switch>
          <Route path="/album" component={Album} />
          <Route path="/listPhotos/:id" component={ListPhotos} />
          <Redirect from="/" to="/album" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
