  import React, { Component,form } from 'react';
 // import Button, {ButtonToolbar} from 'react-bootstrap/lib/Button';
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

  class login extends Component{

    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: '',
    }


    submit(){
      alert('Form Submitted');
    }

    render(){
            return(
            <div className="container">
            <h1 className="jumbotron">Welcome to Login Page</h1>

             <Navbar color="default" light expand="md">
             <Link to="./register"><Button color="primary" size="lg" block>Register</Button></Link>
              </Navbar>
              
                <Form>
                <FormGroup>
                  <Label for="exampleEmail" hidden>Email</Label>
                  <Input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                {' '}
                <FormGroup>
                  <Label for="examplePassword" hidden>Password</Label>
                  <Input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button onClick = {this.submit}>Submit</Button>
              </Form>
            </div>
      
          );
      }
  }

  export default login;