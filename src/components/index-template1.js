import * as React from "react"
import { useState, useEffect } from 'react'; 
import { Link, useStaticQuery, graphql } from 'gatsby'

const IndexTemplate1 = ({props, children}) =>
{
	console.log('rendering IndexTemplate1');
	return (
    <>
		
		<div id="carouselExample" className="carousel slide">
		  <div className="carousel-inner">
			<div className="carousel-item active">
						<a href="https://bootstrapcreative.com/">
							
							<picture>
							  <source srcSet="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)"/>
							  <source srcSet="https://dummyimage.com/1400x500/#007aeb/4196e5" media="(min-width: 769px)"/>
							   <source srcSet="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)"/>
							  <img srcSet="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive image" className="d-block img-fluid img-margin-bottom-0" />
							</picture>

							<div className="carousel-caption">
								<div>
									<h2>Digital Craftsmanship</h2>
									<p>We meticously build each site to get results</p>
									<span className="btn btn-sm btn-outline-secondary">Learn More</span>
								</div>
							</div>
						</a>
					</div>

					<div className="carousel-item">
						<a href="https://bootstrapcreative.com/">
							<picture>
							  <source srcSet="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)"/>
							  <source srcSet="https://dummyimage.com/1400x500/007aeb/4196e5" media="(min-width: 769px)"/>
							   <source srcSet="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)"/>
							  <img srcSet="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive image" className="d-block img-fluid img-margin-bottom-0"/>
							</picture>

							<div className="carousel-caption justify-content-center align-items-center">
								<div>
									<h2>Every project begins with a sketch</h2>
									<p>We work as an extension of your business to explore solutions</p>
									<span className="btn btn-sm btn-outline-secondary">Our Process</span>
								</div>
							</div>
						</a>
					</div>

					<div className="carousel-item">
						<a href="https://bootstrapcreative.com/">
							<picture>
							  <source srcSet="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)"/>
							  <source srcSet="https://dummyimage.com/1400x500/007aeb/4196e5" media="(min-width: 769px)"/>
							   <source srcSet="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)"/>
							  <img srcSet="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive image" className="d-block img-fluid img-margin-bottom-0"/>
							</picture>

							<div className="carousel-caption justify-content-center align-items-center">
								<div>
									<h2>Performance Optimization</h2>
									<p>We monitor and optimize your site's long-term performance</p>
									<span className="btn btn-sm btn-secondary">Learn How</span>
								</div>
							</div>
						</a>
					</div>
		  </div>
		  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Previous</span>
		  </button>
		  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Next</span>
		  </button>
		</div>
		
		
		
		<nav className="navbar navbar-expand-lg sticky-top">
		  <div className="container-fluid">
			<Link
				className="navbar-brand"
				to="/"
				//activeStyle={{ color: "green" }}
				partiallyActive={true}
			>杏川堂</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon2">=</span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item" key={1}>
				  <Link
					className="nav-link active"
					to="/"
					//activeStyle={{ color: "green" }}
					partiallyActive={true}
				>最新消息</Link>
				</li>
				<li className="nav-item" key={2}>
				  <Link
					className="nav-link"
					to="/image-1"
					//activeStyle={{ color: "green" }}
					partiallyActive={true}
				>收費</Link>
				</li>
				<li className="nav-item">
				  <Link
					className="nav-link"
					to="/using-dsg"
					//activeStyle={{ color: "green" }}
					partiallyActive={true}
				>診所簡介</Link>
				</li>
				<li className="nav-item">
					<Link
						className="nav-link"
						to="/"
						//activeStyle={{ color: "green" }}
						partiallyActive={true}
					>服務範圍</Link>
				</li>
				<li className="nav-item">
					<Link
						className="nav-link"
						to="/"
						//activeStyle={{ color: "green" }}
						partiallyActive={true}
					>醫師簡介</Link>
				</li>
				<li className="nav-item">
					<Link
						className="nav-link"
						to="/"
						//activeStyle={{ color: "green" }}
						partiallyActive={true}
					>產品簡介</Link>
				</li>
				<li className="nav-item">
					<Link
						className="nav-link"
						to="/"
						//activeStyle={{ color: "green" }}
						partiallyActive={true}
					>聯絡我們</Link>
				</li>
				<li className="nav-item">
					<Link
						className="nav-link"
						to="/"
						//activeStyle={{ color: "green" }}
						partiallyActive={true}
					>資訊分享</Link>
				</li>
				{/*
				<li class="nav-item dropdown">
				  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown
				  </a>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><hr class="dropdown-divider"></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				  </ul>
				</li>
				
				<li class="nav-item">
				  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
				</li>
				*/}
			  </ul>
			  {/*
			  <form class="d-flex" role="search">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success" type="submit">Search</button>
			  </form>
			  */}
			</div>
		  </div>
		</nav>
	
	
		<div className="row-padding"></div>
		{children}

		<div className="container-fluid footer2">
		<div>Copyright &copy; 2019 杏川堂 版權所有 未經許可 不得轉載</div>
		</div>
	
    </>
	)

}




export default IndexTemplate1; 
