import React,{ Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/header';
import Product from './components/product';

class App extends Component {
	// showProduct(product){
	// 	if(product.status){
	// 		return  <h2>
						
	// 					Id : {product.id} <br/>
	// 					Name : {product.name} <br/> 
	// 					Status : {product.status ? 'Ative' : 'pending'}
					

	// 				</h2>
	// 	}
	// }
	// constructor(props){
	// 	super(props);
	// 	this.onAddProduct=this.onAddProduct.bind(this);
	// }
	constructor(props){
		super(props);
		this.state = {
			Products : [
				{
					id : 1,
					name : 'Iphone X',
					price : '15.000.000',
					image : "https://phuckhangmobile.com/file/iphone-x-trang-900-19447f.jpg",
					status: true
				},
				{
					id : 2,
					name : 'Samsung S9',
					price : '18.000.000',
					image :"https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s9-plus-64gb-xanh-didongviet_2_1_1_1.jpg",
					status: true
				},
				{
					id : 3,
					name : 'Xiaomi Note 9',
					price : '9.000.000',
					image : "https://fptshop.com.vn/Uploads/Originals/2020/5/8/637245524022342857_xiaomi-redmi-note-9-pro-xam-1.png",
					status: true
				}
			],
			isActive : true
		}

	}
	// onAddProduct(){
	// 	console.log(this.refs.name.value);
	// }
	onSetActive = () => {
		if (this.state.isActive === true) {
			this.setState({
				isActive:false
			});
		}else {
			this.setState({
				isActive:true
			})
		}
	}
	render() {
	
		// var product = {
		// 	id: 1,
		// 	name: 'xiaomi',
		// 	status:true 

		// };
		// var lists = [
			// {
			// 	id: 1,
			// 	name : 'Linh',
			// 	age : 18,
			// },
			// {
			// 	id: 1,
			// 	name : 'Lan',
			// 	age : 18,
			// },

			// {
			// 	id: 1,
			// 	name : 'Long',
			// 	age : 18,
			// }


		// ];
		// var listName = lists.map((list, index) => {
		// 	return <div key = {lists.id} >
		// 			<h3>{list.name}</h3>
		// 			<p>{list.age}</p>
		// 		  </div>
		// });
		// var Products = [
		// 	{
		// 		id : 1,
		// 		name : 'Iphone X',
		// 		price : '15.000.000',
		// 		image : "https://phuckhangmobile.com/file/iphone-x-trang-900-19447f.jpg",
		// 		status: true
		// 	},
		// 	{
		// 		id : 2,
		// 		name : 'Samsung S9',
		// 		price : '18.000.000',
		// 		image :"https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s9-plus-64gb-xanh-didongviet_2_1_1_1.jpg",
		// 		status: true
		// 	},
		// 	{
		// 		id : 3,
		// 		name : 'Xiaomi Note 9',
		// 		price : '9.000.000',
		// 		image : "https://fptshop.com.vn/Uploads/Originals/2020/5/8/637245524022342857_xiaomi-redmi-note-9-pro-xam-1.png",
		// 		status: true
		// 	}
			

		// ];

		let ListProduct = this.state.Products.map((product, index) => {
			let result = '';
			if (this.state.isActive === true){
				result = <tr key = {index}>
							<td>{index}</td>
							<td>{product.name}</td>
							
							<td>
								<span className="label label-default">{product.price} VND</span>
							</td>
						</tr>
			}
			return result;
		})
		return (
			
		<div>
			<Header />
			<div>
				<div className="row">
					
				</div>
					<table className="table table-hover">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{ListProduct}
						</tbody>
					</table>
					 <button type="button" className="btn btn-warning" onClick = {this.onSetActive} >
					 		Active : {this.state.isActive === true ?'true' : 'flase'  }
					 </button>

				{/*<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="panel panel-danger">
							<div className="panel-heading">
								<h3 className="panel-title">Add Product</h3>
							</div>
							<div className="panel-body">
								<div className="form-group">
										<label >Name Product</label>
										<input type="text" className="form-control"  ref="name" />
								</div>
								<button type="submit" className="btn btn-primary" onClick= { this.onAddP roduct }>Add</button>
								
							</div>
						</div>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						{ListProduct}
						

					</div>
					{/*<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
						{ this.showProduct(product) }
					</div>
					<div>
						{  listName }

					</div>*/}
						
			</div>
		</div>
		)
	};
}

// function App() {
	

// 	var product = {
// 		id: 1,
// 		name: 'xiaomi',
// 		status:false 

// 	};
// 	return (
		
// 		<div>
// 			<Header />
// 			<div>
// 				<div className="row">
// 					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
// 						<Product />
// 					</div>
// 					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
// 						<h2>
						
// 							Id : {product.id} <br/>
// 							Name : {product.name} <br/> 
// 							Status : {product.status ? 'Ative' : 'pending'}
					

// 						</h2>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default App;
