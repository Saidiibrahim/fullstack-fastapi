import React from "react";
import { Route, BrowserRouter as Router, Routes as RouteSwitch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FunnyGif from "./pages/FunnyGif";
import Welcome from "./pages/Welcome";

const Routes = () => {
  return (
    <Router>
      <RouteSwitch>
        <Route index path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/funny-gif" element={<FunnyGif />} />
      </RouteSwitch>
    </Router>
  );
};

export default Routes;
