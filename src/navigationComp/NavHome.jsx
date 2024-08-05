import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import CssSideBar from "../cssSideBar/CssSideBar";
import JsSideBar from "../jsSideBar/JsSideBar";
import ReactSideBar from "../reactSideBar/ReactSideBar";
import Header from "../commanFolder/Header";
import Logo from "../logo/Logo";
import Codemind from "../Codemind";


const NavHome = () => {
  return (
    <BrowserRouter>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor: 'white' }}>
        <Logo />
        <Header />
      </div>
      <div style={{ marginTop: '90px' }} className="content-container"> 
        <Routes>
          <Route  exact path="/" element={<Codemind/>} /> 
          <Route exact path="/html/*" element={<SideBar />} />  
          <Route exact path="/css/*" element={<CssSideBar />} />
          <Route exact path="/javascript/*" element={<JsSideBar />} />
          <Route exact path="/react/*" element={<ReactSideBar />} />
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default NavHome;
