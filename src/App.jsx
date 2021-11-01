// data folder runs: json-server react-db.json --watch --port=5000
// ecommerce folder runs: npm start
// a lot of helps from freeCodeCamp.org

import React, {Component} from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import NotMatchPage from "./NotMatchPage";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

export default class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Login}/>
					<Route path="/dashboard" exact component={Dashboard}/>
					<Route path="/customers" exact component={CustomersList}/>
					<Route path="/cart" exact component={ShoppingCart}/>
					<Route path="/*" exact component={NotMatchPage}/>
				</Switch>
			</BrowserRouter>
		);
	}
}