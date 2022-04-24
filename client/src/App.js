import React from 'react';
import Form from './components/form';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark" className="mb-3">
          <Container>
            <Navbar.Brand >
              <Link className="navbar-brand" to="/">Day Production</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-link" to="/nightProduction">Night Production</Link>
              </Nav.Link>
              <Nav.Link >
                <Link className="nav-link" to="/">Calendar</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Form />
      </div>
    </Router>
  );
}

export default App;
