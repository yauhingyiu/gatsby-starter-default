import * as React from "react"
import { useState, useEffect } from 'react'; 
import { Link, useStaticQuery, graphql } from 'gatsby'

const IndexContent = ({props, children}) =>
{
	return (
		<div id="container1" className="container">
		
		  <div className="row" data-masonry='{"percentPosition": true }'>
			  {/*
			<div className="col col-xs-12 col-sm-6 col-lg-4">
				<div className="card" style="width: 18rem;">
					<img className="card-img-top" src={'/images/main_02.png'} alt="Card image cap"/>
					<div className="card-body">
						<h5 className="card-title">診所簡介</h5>
						<p className="card-text">《杏川堂》由畢業於國內醫科大學及擁有粵港數十年豐富臨床經驗的註冊中醫師註診，並得到香港政府認可。</p>
						<a href="#" className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			  */}
			<div className="col col-xs-12 col-sm-6 col-lg-4">
				<div className="card-title-container1">
					<div className="card-title1">最新消息</div>
				</div>
				<div className="row">
					<div className="d-flex justify-content-between">
						<div>營業時間變更通知...</div><div>2024/09/01</div>
					</div>
					<div className="d-flex justify-content-between">
						<div>葉崗醫師和廖德清醫師正式退休...</div><div>2024/08/31</div>
					</div>
					<div className="d-flex justify-content-between">
						<div>葉崗醫師、廖德清醫師收費調整通...</div><div>2023/01/19</div>
					</div>
				</div>
				
				<div className="row-padding"></div>
				<div className="card-title-container1">
					<div className="card-title1">資訊分享</div>
				</div>
				<div className="row">
					<div className="d-flex justify-content-between">
						<div>何醫師專訪</div><div>2023/09/02</div>
					</div>
					<div className="d-flex justify-content-between">
						<div>蟲草鍳別</div><div>2022/04/06</div>
					</div>
					<div className="d-flex justify-content-between">
						<div>什麼時天灸療程</div><div>2013/10/07</div>
					</div>
				</div>
				<div className="row-padding"></div>

			</div>
			<div className="col col-xs-12 col-sm-6 col-lg-4">
				<div className="card-title-container1">
					<div className="card-title1">診所簡介</div>
				</div>
				<div className="row">
					<div className="d-flex justify-content-evenly">
						<img src={'/images/main_02.png'} />《杏川堂》由畢業於國內醫科大學及擁有粵港數十年豐富臨床經驗的註冊中醫師註診，並得到香港政府認可。
					</div>
				</div>
				
				<div className="row-padding"></div>
				
				<div className="card-title-container1">
					<div className="card-title1">營業時間及地址</div>
				</div>
				<div className="row">
					<div className="col-3">
					荃灣︰
					</div>
					<div className="col-9">
					新界荃灣大河道77/89號寳成樓地下5C(荃灣地鐵A出口行人天橋直達)
					</div>
				</div>
				<div className="row">
					<div className="col-3">
					電話︰
					</div>
					<div className="col-9">
					2661 8910
					</div>
				</div>
				<div className="row">
					<div className="col-3">
					傳真︰
					</div>
					<div className="col-9">
					2661 8922
					</div>
				</div>
				<div className="row">
					<div className="col-3">
					營業時間︰
					</div>
					<div className="col-9">
					星期一至五 上午10:00-1:30, 下午3:00-7:30。
					<br/>星期六 上午10:00-1:30, 下午3:00-6:00。
					<br/>星期日 上午10:00-1:30，下午3:30-6:00。
					<br/>逢星期三休息
					</div>
				</div>
				
				<div className="row-padding"></div>
				{/*
				<div className="card-title-container1">
					<div className="card-title1">即時查詢</div>
				</div>
				*/}
				<div className="row">
					<div className="col text-center">
						<div className="d-flex justify-content-evenly">
							<img src={'/images/WhatsApp.png'} width="32" height="32"
							/><img src={'/images/Line.png'} width="32" height="32"
							/><img src={'/images/Wechat.png'} width="32" height="32"
							/><img src={'/images/Facebook.png'} width="32" height="32"/>
						</div>
					</div>
				</div>
				<div className="row-padding"></div>
			</div>
			
			<div className="col col-xs-12 col-sm-6 col-lg-4">
				<div className="row">
					<div className="col-4">
					<div className="therapy-bg1">天灸<br/>療程</div>
					</div>
					<div className="col-8">
					<div className="therapy-title1">中醫古代療法</div>
					選用特制中藥敷貼人體穴位，通過刺激經絡的調節作用，起到防病保健作用。
					</div>
				</div>
				<div className="row-padding"></div>
				<div className="row">
					<div className="col-4">
					<div className="therapy-bg1">產品<br/>介紹</div>
					</div>
					<div className="col-8">
					<div className="therapy-title1">藥材湯包</div>
					根據個人的體質配置合適的藥材，來提升自身免疫力，延年益壽。
					</div>
				</div>
				<div className="row-padding"></div>
				<div className="row">
					<div className="col-4">
					<div className="therapy-bg1">服務<br/>範圍</div>
					</div>
					<div className="col-8">
					<div className="therapy-title1">專業服務</div>
					本公司服務範圍主要為內科、婦科、兒科、皮膚科、針灸科、腫瘤科、養生保健、美容減肥。
					</div>
				</div>
				<div className="row-padding"></div>
			</div>
			
			
		  </div>
		</div>
	)

}

export default IndexContent; 
