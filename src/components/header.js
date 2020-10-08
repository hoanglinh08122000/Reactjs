import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function Header() {
	return (
		<div>
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Bài 2: Components</a>
					<ul className="nav navbar-nav">
						<li >
							<a href="#">Trang chủ</a>
						</li>
						<li className="active">
							<a href="#">Danh mục sản phẩm</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Header;
