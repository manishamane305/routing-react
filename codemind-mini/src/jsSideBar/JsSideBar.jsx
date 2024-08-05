import React from 'react';
import '../sideBar/Style.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Js1 from './Js1';
import Js2 from './Js2';
import Js3 from './Js3';
import Js4 from './Js4';

const JsSideBar = () => {
    return (
        <>
        <div className='row'>
        <div className='col-md-2 customDiv fixed-sidebar position-fixed'>
          <h4>JS Tutorial</h4>
          <ul type='none' className='list'>
            <li><NavLink to="/javascript/javascript-home" activeClassName="active">JS Home</NavLink></li>
            <li><NavLink to="/javascript/javascript-intro" activeClassName="active">JS Intro</NavLink></li>
            <li><NavLink to="/javascript/javascript-var" activeClassName="active">JS Variables</NavLink></li>
            <li><NavLink to="/javascript/javascript-json" activeClassName="active">JS JSON</NavLink></li>
            <li><NavLink to="/javascript/javascript-classes" activeClassName="active">JS classes</NavLink></li>
            <li><NavLink to="/javascript/javascript-strict" activeClassName="active">JS Strict Mode</NavLink></li>
            <li><NavLink to="/javascript/javascript-home" activeClassName="active">JS Home</NavLink></li>
            <li><NavLink to="/javascript/javascript-intro" activeClassName="active">JS Intro</NavLink></li>
            <li><NavLink to="/javascript/javascript-var" activeClassName="active">JS Variables</NavLink></li>
            <li><NavLink to="/javascript/javascript-json" activeClassName="active">JS JSON</NavLink></li>
            <li><NavLink to="/javascript/javascript-classes" activeClassName="active">JS classes</NavLink></li>
            <li><NavLink to="/javascript/javascript-strict" activeClassName="active">JS Strict Mode</NavLink></li>
            <li><NavLink to="/javascript/javascript-home" activeClassName="active">JS Home</NavLink></li>
            <li><NavLink to="/javascript/javascript-intro" activeClassName="active">JS Intro</NavLink></li>
            <li><NavLink to="/javascript/javascript-var" activeClassName="active">JS Variables</NavLink></li>
            <li><NavLink to="/javascript/javascript-json" activeClassName="active">JS JSON</NavLink></li>
            <li><NavLink to="/javascript/javascript-classes" activeClassName="active">JS classes</NavLink></li>
            <li><NavLink to="/javascript/javascript-strict" activeClassName="active">JS Strict Mode</NavLink></li>
            <li><NavLink to="/javascript/javascript-home" activeClassName="active">JS Home</NavLink></li>
            <li><NavLink to="/javascript/javascript-intro" activeClassName="active">JS Intro</NavLink></li>
            <li><NavLink to="/javascript/javascript-var" activeClassName="active">JS Variables</NavLink></li>
            <li><NavLink to="/javascript/javascript-json" activeClassName="active">JS JSON</NavLink></li>
            <li><NavLink to="/javascript/javascript-classes" activeClassName="active">JS classes</NavLink></li>
            <li><NavLink to="/javascript/javascript-strict" activeClassName="active">JS Strict Mode</NavLink></li>
            <li><NavLink to="/javascript/javascript-home" activeClassName="active">JS Home</NavLink></li>
            <li><NavLink to="/javascript/javascript-intro" activeClassName="active">JS Intro</NavLink></li>
            <li><NavLink to="/javascript/javascript-var" activeClassName="active">JS Variables</NavLink></li>
            <li><NavLink to="/javascript/javascript-json" activeClassName="active">JS JSON</NavLink></li>
            <li><NavLink to="/javascript/javascript-classes" activeClassName="active">JS classes</NavLink></li>
            <li><NavLink to="/javascript/javascript-strict" activeClassName="active">JS Strict Mode</NavLink></li><li><NavLink to="/javascript/javascript-home" activeClassName="active">JS Home</NavLink></li>
            <li><NavLink to="/javascript/javascript-intro" activeClassName="active">JS Intro</NavLink></li>
            <li><NavLink to="/javascript/javascript-var" activeClassName="active">JS Variables</NavLink></li>
            <li><NavLink to="/javascript/javascript-json" activeClassName="active">JS JSON</NavLink></li>
            <li><NavLink to="/javascript/javascript-classes" activeClassName="active">JS classes</NavLink></li>
            <li><NavLink to="/javascript/javascript-strict" activeClassName="active">JS Strict Mode</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='col-md-10 offset-md-2 content-area'>
          <Routes>
            <Route path="/javascript-home" element={<Js1/>} />
            <Route path="/javascript-intro" element={<Js2/>} />
            <Route path="/javascript-var" element={<Js3/>} />
            <Route path="/javascript-json" element={<Js4/>} />
            <Route path="/javascript-classes" element={<div><h1>JS Classes</h1><p>Classes content...</p></div>} />
            <Route path="/javascript-strict" element={<div><h1>JS Strict Mode</h1><p>Strict Mode content...</p></div>} />
          </Routes>
        </div>
        </>
    );
}

export default JsSideBar;
