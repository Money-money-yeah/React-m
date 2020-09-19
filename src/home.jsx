import React,{ Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Icon , TabBar} from 'antd-mobile';





class Home extends Component{
	constructor(){
		super()
		this.state = {
			
			
		}
	}
	
	 
	
	  
	  
	render(){
		return (
			<div className="home">
				<div className="top">
					<NavBar
					  mode="dark"
					  leftContent={
						  [<Icon key="2" type="left"/>]
					  }
					  rightContent={[
						<Icon key="1" type="ellipsis" />,
					  ]}
					>MM商城</NavBar>
				</div>
				
				
				<div>
					  <div style={{ position: 'fixed', height: '92%', width: '100%', top: '50px' }}>
					        我们
					         
					  </div>
				</div>
		</div>)
	}
}







export default Home