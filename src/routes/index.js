import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

export default() =>
	(<BrowserRouter>
		<Switch>
			<Route path = "/" exact component ={Login}/>
			<Route path = "/register" exact component ={Register}/>
			<Route path = "/dashboard" exact component ={Dashboard}/>
		</Switch>
	</BrowserRouter>);