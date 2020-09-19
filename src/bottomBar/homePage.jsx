import React,{Component} from "react";
import "./hp.css";
import { Carousel, WingBlank } from 'antd-mobile';
class HomePage extends Component{
	constructor(props){
		super(props)
		this.state = {
			
			 data: ['1', '2', '3'],
			    imgHeight: 176,
			
		}
	}	
		componentDidMount() {
		   
		    setTimeout(() => {
		      this.setState({
		        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
		      });
		    }, 100);
		  }
		
		render(){
			return(
				<div className="homePage">
					<div className="loop">
						<WingBlank>
						        <Carousel
						          autoplay={false}
						          infinite
						          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
						          afterChange={index => console.log('slide to', index)}
						        >
						          {this.state.data.map(val => (
						            <a
						              key={val}
						              href="http://www.alipay.com"
						              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
						            >
						              <img
						                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
						                alt=""
						                style={{ width: '100%', verticalAlign: 'top' }}
						                onLoad={() => {
						                  // fire window resize event to change height
						                  window.dispatchEvent(new Event('resize'));
						                  this.setState({ imgHeight: 'auto' });
						                }}
						              />
						            </a>
						          ))}
						        </Carousel>
						      </WingBlank>
					</div>
				
				
				</div>
			)
		
	}
}

export default HomePage