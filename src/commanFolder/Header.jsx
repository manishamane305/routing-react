import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route  } from 'react-router-dom';
import Codemind from '../Codemind';

const Header = () => {
  return (
   <>
    {/* <Navbar bg="dark" variant="dark" className="p-0 mt-0 mb-0">
      <Container fluid>
        <Nav className="me-auto flex-grow-1 ms-0">
          <Nav.Link as={NavLink} to="/html/html-home">HTML</Nav.Link>
          <Nav.Link as={NavLink} to="/css/css-home">CSS</Nav.Link>
          <Nav.Link as={NavLink} to="/javascript/javascript-home">JavaScript</Nav.Link>
          <Nav.Link as={NavLink} to="/react/react-home">React</Nav.Link>
        </Nav>
      </Container>
    </Navbar> */}
    

    <nav class="navbar navbar-expand-lg navbar-light bg-black p-0 ">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link active text-white" aria-current="page" href="/html/html-home">HTML</a>
        <a className="nav-link active text-white" aria-current="page" href="/css/css-home">CSS</a>
        <a className="nav-link text-white" href="/javascript/javascript-home">JavaScript</a>
        <a className="nav-link text-white" href="/react/react-home">React</a>
       
      </div>
    </div>
  </div>
</nav>
    




<div>
<Routes>
<Route path="/" element={<Codemind/>} />
</Routes>
  </div>
    
  </>
  );
}

export default Header;
