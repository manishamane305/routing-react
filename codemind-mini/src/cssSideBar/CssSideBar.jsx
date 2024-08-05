import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../sideBar/Style.css';
import Css1 from './Css1';
import Css2 from './Css2';
import Css3 from './Css3';
import Css4 from './Css4';

const CssSideBar = () => {
    return (
        <>
      <div className='row'>
        <div className='col-md-2 customDiv fixed-sidebar position-fixed'>
          <h4>CSS Tutorial</h4>
          <ul type='none' className='list'>
            <li><NavLink to="/css/css-home" activeClassName="active">CSS Home</NavLink></li>
            <li><NavLink to="/css/css-intro" activeClassName="active">CSS Intro</NavLink></li>
            <li><NavLink to="/css/css-how" activeClassName="active">How To Add CSS</NavLink></li>
            <li><NavLink to="/css/css-selectors" activeClassName="active">CSS Selectors</NavLink></li>
            <li><NavLink to="/css/css-box" activeClassName="active">CSS Box Model</NavLink></li>
            <li><NavLink to="/css/css-padding" activeClassName="active">CSS Padding</NavLink></li>
            <li><NavLink to="/css/css-home" activeClassName="active">CSS Home</NavLink></li>
            <li><NavLink to="/css/css-intro" activeClassName="active">CSS Intro</NavLink></li>
            <li><NavLink to="/css/css-how" activeClassName="active">How To Add CSS</NavLink></li>
            <li><NavLink to="/css/css-selectors" activeClassName="active">CSS Selectors</NavLink></li>
            <li><NavLink to="/css/css-box" activeClassName="active">CSS Box Model</NavLink></li>
            <li><NavLink to="/css/css-padding" activeClassName="active">CSS Padding</NavLink></li>
            <li><NavLink to="/css/css-home" activeClassName="active">CSS Home</NavLink></li>
            <li><NavLink to="/css/css-intro" activeClassName="active">CSS Intro</NavLink></li>
            <li><NavLink to="/css/css-how" activeClassName="active">How To Add CSS</NavLink></li>
            <li><NavLink to="/css/css-selectors" activeClassName="active">CSS Selectors</NavLink></li>
            <li><NavLink to="/css/css-box" activeClassName="active">CSS Box Model</NavLink></li>
            <li><NavLink to="/css/css-padding" activeClassName="active">CSS Padding</NavLink></li>
            <li><NavLink to="/css/css-home" activeClassName="active">CSS Home</NavLink></li>
            <li><NavLink to="/css/css-intro" activeClassName="active">CSS Intro</NavLink></li>
            <li><NavLink to="/css/css-how" activeClassName="active">How To Add CSS</NavLink></li>
            <li><NavLink to="/css/css-selectors" activeClassName="active">CSS Selectors</NavLink></li>
            <li><NavLink to="/css/css-box" activeClassName="active">CSS Box Model</NavLink></li>
            <li><NavLink to="/css/css-padding" activeClassName="active">CSS Padding</NavLink></li>
            <li><NavLink to="/css/css-home" activeClassName="active">CSS Home</NavLink></li>
            <li><NavLink to="/css/css-intro" activeClassName="active">CSS Intro</NavLink></li>
            <li><NavLink to="/css/css-how" activeClassName="active">How To Add CSS</NavLink></li>
            <li><NavLink to="/css/css-selectors" activeClassName="active">CSS Selectors</NavLink></li>
            <li><NavLink to="/css/css-box" activeClassName="active">CSS Box Model</NavLink></li>
            <li><NavLink to="/css/css-padding" activeClassName="active">CSS Padding</NavLink></li>
            <li><NavLink to="/css/css-home" activeClassName="active">CSS Home</NavLink></li>
            <li><NavLink to="/css/css-intro" activeClassName="active">CSS Intro</NavLink></li>
            <li><NavLink to="/css/css-how" activeClassName="active">How To Add CSS</NavLink></li>
            <li><NavLink to="/css/css-selectors" activeClassName="active">CSS Selectors</NavLink></li>
            <li><NavLink to="/css/css-box" activeClassName="active">CSS Box Model</NavLink></li>
            <li><NavLink to="/css/css-padding" activeClassName="active">CSS Padding</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='col-md-10 offset-md-2 content-area'>
          <Routes>
            <Route path="/css-home" element={<Css1/>} />
            <Route path="/css-intro" element={<Css2/>} />
            <Route path="/css-how" element={<Css3/>} />
            <Route path="/css-selectors" element={<Css4/>} />
            <Route path="/css-box" element={<div><h1>CSS Box Model</h1><p>Box Model content...</p></div>} />
            <Route path="/css-padding" element={<div><h1>CSS Padding</h1><p>Padding content...</p></div>} />
          </Routes>
        </div>
    </>
    );
}

export default CssSideBar;
