import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../sideBar/Style.css';
import Html1 from './Html1';
import Html2 from './Html2';
import Html3 from './Html3';
import Html4 from './Html4';

const SideBar = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-2 customDiv fixed-sidebar position-fixed'>
          <h4>HTML Tutorial</h4>
          <ul type='none' className='list '>
            <li><NavLink to="/html/html-home" activeClassName="active">HTML Home</NavLink></li>
            <li><NavLink to="/html/html-intro" activeClassName="active">HTML Intro</NavLink></li>
            <li><NavLink to="/html/html-basic" activeClassName="active">HTML Basic</NavLink></li>
            <li><NavLink to="/html/html-lists" activeClassName="active">HTML Lists</NavLink></li>
            <li><NavLink to="/html/html-forms" activeClassName="active">HTML Forms</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
        
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Media</NavLink></li>
            <li><NavLink to="/html/html-media" activeClassName="active">HTML Manisha</NavLink></li>
        
          </ul>
        </div>
      </div>
      
        <div  className='col-md-10 offset-md-2 content-area'>
          <Routes>
            <Route path="/html-home" element={<Html1 />} />
            <Route path="/html-intro" element={<Html2 />} />
            <Route path="/html-basic" element={<Html3 />} />
            <Route path="/html-lists" element={<Html4 />} />
            <Route path="/html-forms" element={<div><h1>HTML Forms</h1><p>Forms content...</p></div>} />
            <Route path="/html-media" element={<div><h1>HTML Media</h1><p>Media content...</p></div>} />
          </Routes>
        </div>
      
    </>
  );
}

export default SideBar;
