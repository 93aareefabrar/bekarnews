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

  class register extends Component{


    submit(){
      alert('Form Submitted');
    }

    render(){
            return(
            <div className="container">
            <h1 className="jumbotron">Welcome to Registration Page</h1>

             <Navbar color="default" light expand="md">
              <Link to="./"><Button color="primary" size="lg" block>Login</Button></Link>
              </Navbar>
              
                <Form>
                <FormGroup>
                  <Label for="exampleFullName" hidden>FullName</Label>
                  <Input type="fullname" name="fullname" id="exampleFullName" placeholder="FullName" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleUserName" hidden>UserName</Label>
                  <Input type="username" name="username" id="exampleUserName" placeholder="UserName" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail" hidden>Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                {' '}
                <FormGroup>
                  <Label for="examplePassword" hidden>Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleAge" hidden>Age</Label>
                  <Input type="age" name="age" id="exampleAge" placeholder="Age" />
                </FormGroup>
                {' '}
                <Button onClick = {this.submit}>Submit</Button>
              </Form>
            </div>
      
          );
      }
  }

  export default register;