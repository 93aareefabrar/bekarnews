  import React, { Component,form } from 'react';
  import './App.css'
  import './index.js'
  import Routes from './routes';

  import { Button, Form, FormGroup, Label, Input, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem  } from 'reactstrap';
  import { HashRouter as Router, Route, Link} from 'react-router-dom';

  class App extends Component {

    render() {
      return (
          <div className="App"> 
            <Routes/>
          </div>
        );
    }
  }

export default App;