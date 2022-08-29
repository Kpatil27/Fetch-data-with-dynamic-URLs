import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;