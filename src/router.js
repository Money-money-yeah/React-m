import React,{ Component } from "react" 
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
	
} from "react-router-dom" 

import Home from './home.jsx'
import HomePage from './bottomBar/homePage.jsx'
import Member from './bottomBar/member.jsx'
import Cart from './bottomBar/cart.jsx'
import Search from './bottomBar/search.jsx'

class ERouter extends Component {
	render(){
		return(
			<BrowserRouter>
				<Home>
					<Switch>
						<Route path="/homePage" component={HomePage} />
						<Route path="/member" component={Member} />
						<Route path="/cart" component={Cart} />
						<Route path="/search" component={Search} />
						<Redirect from="/" to="/homePage"></Redirect>
					</Switch>
				</Home>
			</BrowserRouter>
		
		)
	}
}

export default ERouter
