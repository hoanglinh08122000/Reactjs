import React, { Component } from 'react';
class Product extends Component {

	// constructor(props){
	// 	super(props);
	// 	this.Addtocart = this.Addtocart.bind(this);
	// }
	// Addtocart(){
	// 	alert(this.props.name + ' - ' +  this.props.price);
	// }	
	Addtocart2= () => {
		alert(this.props.name + ' - ' +  this.props.price);
	}	
render() {
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
			<div className="thumbnail">
				<img alt={this.props.name} src={this.props.image} /> 
 				<div className="caption">
				
					<h3>{this.props.name}</h3>
					<p>
						{this.props.price}
					</p>
					{/*<p>
						<a className="btn btn-primary" onClick = { this.Addtocart }>Chon mua</a>
						
					</p>*/}
					<p>
						<a className="btn btn-primary" onClick = { this.Addtocart2 }>Chon mua</a> 
						
					</p>
				</div>
			</div>
		</div>
		)
	};
}


export default Product;

