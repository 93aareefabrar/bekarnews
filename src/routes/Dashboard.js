  import React, { Component,form } from 'react';
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

  class dashboard extends Component{

    submit(){
      alert('Form Submitted');
    }

    render(){
            return(
            <div className="container">
            <h1 className="jumbotron">Welcome to Dashboard Page</h1>
            </div>
          );
      }
  }

  export default dashboard;