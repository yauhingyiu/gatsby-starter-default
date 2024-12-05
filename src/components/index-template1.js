import * as React from "react"
import { useState, useEffect } from 'react'; 
import { Link, useStaticQuery, graphql } from 'gatsby'

const IndexTemplate1 = ({props, children, setTargetChildComponent}) =>
{
	return (
    <main>
		<div id="carouselExample" class="carousel slide">
		  <div class="carousel-inner">
			<div class="carousel-item active">
						<a href="https://bootstrapcreative.com/">
							
							<picture>
							  <source srcset="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)"/>
							  <source srcset="https://dummyimage.com/1400x500/#007aeb/4196e5" media="(min-width: 769px)"/>
							   <source srcset="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)"/>
							  <img srcset="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive image" class="d-block img-fluid img-margin-bottom-0" />
							</picture>

							<div class="carousel-caption">
								<div>
									<h2>Digital Craftsmanship</h2>
									<p>We meticously build each site to get results</p>
									<span class="btn btn-sm btn-outline-secondary">Learn More</span>
								</div>
							</div>
						</a>
					</div>

					<div class="carousel-item">
						<a href="https://bootstrapcreative.com/">
							<picture>
							  <source srcset="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)"/>
							  <source srcset="https://dummyimage.com/1400x500/007aeb/4196e5" media="(min-width: 769px)"/>
							   <source srcset="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)"/>
							  <img srcset="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive image" class="d-block img-fluid img-margin-bottom-0"/>
							</picture>

							<div class="carousel-caption justify-content-center align-items-center">
								<div>
									<h2>Every project begins with a sketch</h2>
									<p>We work as an extension of your business to explore solutions</p>
									<span class="btn btn-sm btn-outline-secondary">Our Process</span>
								</div>
							</div>
						</a>
					</div>

					<div class="carousel-item">
						<a href="https://bootstrapcreative.com/">
							<picture>
							  <source srcset="https://dummyimage.com/2000x500/007aeb/4196e5" media="(min-width: 1400px)"/>
							  <source srcset="https://dummyimage.com/1400x500/007aeb/4196e5" media="(min-width: 769px)"/>
							   <source srcset="https://dummyimage.com/800x500/007aeb/4196e5" media="(min-width: 577px)"/>
							  <img srcset="https://dummyimage.com/600x500/007aeb/4196e5" alt="responsive image" class="d-block img-fluid img-margin-bottom-0"/>
							</picture>

							<div class="carousel-caption justify-content-center align-items-center">
								<div>
									<h2>Performance Optimization</h2>
									<p>We monitor and optimize your site's long-term performance</p>
									<span class="btn btn-sm btn-secondary">Learn How</span>
								</div>
							</div>
						</a>
					</div>
		  </div>
		  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		  </button>
		  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		  </button>
		</div>
		
		
		
		<nav class="navbar navbar-expand-lg sticky-top">
		  <div class="container-fluid">
			<a class="navbar-brand" href="javascript:void(0)" onClick={()=>setTargetChildComponent({name:''})}>杏川堂</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span class="navbar-toggler-icon2">=</span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
				  <a class="nav-link active" aria-current="page" href="javascript:void(0)" onClick={()=>setTargetChildComponent({name:'hkweather'})}>最新消息</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="javascript:void(0)" onClick={()=>setTargetChildComponent({name:'image1'})}>收費</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="javascript:void(0)">診所簡介</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="javascript:void(0)">服務範圍</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="javascript:void(0)">醫師簡介</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="javascript:void(0)">產品簡介</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="javascript:void(0)">聯絡我們</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="javascript:void(0)">資訊分享</a>
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
	
	
		<div class="row-padding"></div>
		{children}

		<div class="container-fluid footer2">
		<div>Copyright &copy; 2019 杏川堂 版權所有 未經許可 不得轉載</div>
		</div>
	
    </main>
	)

}

export default IndexTemplate1; 
