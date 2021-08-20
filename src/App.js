import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/ContactPage'
import DataSci from './pages/DataSci'
import Art from './pages/Art'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Gavin Deiss",
      headerLinks: [
      {title: "Home", path: "/"},
      {title: "CS-Academy", path: "/cs-acad"},
      {title: "Data-Science", path: "/data-sci"},
      {title: "Contact", path:"/contact"}
      ],
      home: {
        title: "Placeholder title",
        subtitle: "Placeholder subtitle",
        text: "Placeholder text"
      },
      art: {
        title: "Placeholder title",
        subtitle: "Placeholder subtitle",
        text: "Placeholder text"
      },
      datasci: {
        title: "Placeholder title",
        subtitle: "Placeholder subtitle",
        text: "Placeholder text"
      },
      contact: {
        title: "Placeholder title",
        subtitle: "Placeholder subtitle",
        text: "Placeholder text"
      }
    }

  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true} style={{backgroundColor : 'black'}}>
          
          <Navbar className="border-bottom" expand="lg" variant="dark">
            <Navbar.Brand className="px-3" style={{color : 'white'}}>Gavin Deiss</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Link className="nav-link ml-auto" style={{color : 'white'}} to="/">Home</Link>
              <Link className="nav-link ml-auto" style={{color : 'white'}} to="/contact">Contact</Link>
              <NavDropdown title="Projects" style={{color : 'white', backgroundColor : 'black'}} id="projects-dropdown" className="ml-auto">
                <NavDropdown.Item style={{color : 'white', backgroundColor : 'black'}} href="/data-sci">Data Science</NavDropdown.Item>
                <NavDropdown.Item style={{color : 'white', backgroundColor : 'black'}} href="/art">Art</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <Home title={this.state.home.title} />} />
          <Route path="/art" render={() => <Art title={this.state.art.title} />} />
          <Route path="/data-sci" render={() => <DataSci title={this.state.art.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
      );
  }
}

export default App;
