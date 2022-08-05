import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import Main from "./main/Main";
import PersonalPage from "./projects/PersonalPage";

export default class App extends Component {
  render() {
    return (
      <div className="bg-deep-blue">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="personal-page" element={<PersonalPage />} />
        </Routes>
      </div>
    );
  }
}
