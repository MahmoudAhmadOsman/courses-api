import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationComponent from "./components/navigation/NavigationComponent";
import HomeComponent from "./components/home/HomeComponent";
import NotFound from "./utils/NotFound";
import LoginComponent from "./auth/LoginComponent";

function App() {
  return (
    <div className="home-app">
      <BrowserRouter>
        <React.Fragment>
          <NavigationComponent />
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/" exact element={<HomeComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
