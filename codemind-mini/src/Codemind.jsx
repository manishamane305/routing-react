import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Codemind.css';

const Codemind = () => {
  return (
    <>
      <div className="main-page">
        <h1>CodeMind Learning Platform</h1>
        <h3>Learn with us, job with us</h3>
        <div className="d-flex justify-content-center mt-4">
          <Form className="d-flex w-25 justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search our tutorials, e.g. HTML"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button variant="outline-success" className="bg-success text-black rounded-pill">Search</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Codemind;
