import React from 'react';
import '../sideBar/Style.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import React1 from './React1';
import React2 from './React2';
import React3 from './React3';
import React4 from './React4';

const ReactSideBar = () => {
    return (
        <>
        <div className='row'>
        <div className='col-md-2 customDiv fixed-sidebar position-fixed'>
          <h4>React Tutorial</h4>
          <ul type='none' className='list'>
            <li><NavLink to="/react/react-home" activeClassName="active">React Home</NavLink></li>
            <li><NavLink to="/react/react-intro" activeClassName="active">React Intro</NavLink></li>
            <li><NavLink to="/react/react-es6" activeClassName="active">React ES6</NavLink></li>
            <li><NavLink to="/react/react-jsx" activeClassName="active">React JSX</NavLink></li>
            <li><NavLink to="/react/react-class" activeClassName="active">React class</NavLink></li>
            <li><NavLink to="/react/react-props" activeClassName="active">React Props</NavLink></li>
            <li><NavLink to="/react/react-home" activeClassName="active">React Home</NavLink></li>
            <li><NavLink to="/react/react-intro" activeClassName="active">React Intro</NavLink></li>
            <li><NavLink to="/react/react-es6" activeClassName="active">React ES6</NavLink></li>
            <li><NavLink to="/react/react-jsx" activeClassName="active">React JSX</NavLink></li>
            <li><NavLink to="/react/react-class" activeClassName="active">React class</NavLink></li>
            <li><NavLink to="/react/react-props" activeClassName="active">React Props</NavLink></li>
            <li><NavLink to="/react/react-home" activeClassName="active">React Home</NavLink></li>
            <li><NavLink to="/react/react-intro" activeClassName="active">React Intro</NavLink></li>
            <li><NavLink to="/react/react-es6" activeClassName="active">React ES6</NavLink></li>
            <li><NavLink to="/react/react-jsx" activeClassName="active">React JSX</NavLink></li>
            <li><NavLink to="/react/react-class" activeClassName="active">React class</NavLink></li>
            <li><NavLink to="/react/react-props" activeClassName="active">React Props</NavLink></li>
            <li><NavLink to="/react/react-home" activeClassName="active">React Home</NavLink></li>
            <li><NavLink to="/react/react-intro" activeClassName="active">React Intro</NavLink></li>
            <li><NavLink to="/react/react-es6" activeClassName="active">React ES6</NavLink></li>
            <li><NavLink to="/react/react-jsx" activeClassName="active">React JSX</NavLink></li>
            <li><NavLink to="/react/react-class" activeClassName="active">React class</NavLink></li>
            <li><NavLink to="/react/react-props" activeClassName="active">React Props</NavLink></li>
            <li><NavLink to="/react/react-home" activeClassName="active">React Home</NavLink></li>
            <li><NavLink to="/react/react-intro" activeClassName="active">React Intro</NavLink></li>
            <li><NavLink to="/react/react-es6" activeClassName="active">React ES6</NavLink></li>
            <li><NavLink to="/react/react-jsx" activeClassName="active">React JSX</NavLink></li>
            <li><NavLink to="/react/react-class" activeClassName="active">React class</NavLink></li>
            <li><NavLink to="/react/react-props" activeClassName="active">React Props</NavLink></li>
            <li><NavLink to="/react/react-home" activeClassName="active">React Home</NavLink></li>
            <li><NavLink to="/react/react-intro" activeClassName="active">React Intro</NavLink></li>
            <li><NavLink to="/react/react-es6" activeClassName="active">React ES6</NavLink></li>
            <li><NavLink to="/react/react-jsx" activeClassName="active">React JSX</NavLink></li>
            <li><NavLink to="/react/react-class" activeClassName="active">React class</NavLink></li>
            <li><NavLink to="/react/react-props" activeClassName="active">React Props</NavLink></li>
            <li><NavLink to="/react/react-home" activeClassName="active">React Home</NavLink></li>
            <li><NavLink to="/react/react-intro" activeClassName="active">React Intro</NavLink></li>
            <li><NavLink to="/react/react-es6" activeClassName="active">React ES6</NavLink></li>
            <li><NavLink to="/react/react-jsx" activeClassName="active">React JSX</NavLink></li>
            <li><NavLink to="/react/react-class" activeClassName="active">React class</NavLink></li>
            <li><NavLink to="/react/react-props" activeClassName="active">React Props</NavLink></li>
          </ul>
        </div>  
      </div>
      
      <div className='col-md-10 offset-md-2 content-area'>
          <Routes>
            <Route path="/react-home" element={<React1/>} />
            <Route path="/react-intro" element={<React2/>} />
            <Route path="/react-es6" element={<React3/>} />
            <Route path="/react-jsx" element={<React4/>} />
            <Route path="/react-class" element={<div><h1>React class</h1><p>Class content...</p></div>} />
            <Route path="/react-props" element={<div><h1>React props</h1><p>Props content...</p></div>} />
          </Routes>
        </div>
        </>
    );
}

export default ReactSideBar;
