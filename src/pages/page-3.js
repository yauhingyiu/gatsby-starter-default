import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => {
  const siteMetadata = useStaticQuery(graphql`
	query {
		site {
			siteMetadata {
				title,
				airtable {
					tokens {
						readdata
					}
				}
			}
        }
    }`)
  

  return (
  <Layout>
    <h1>Hello from the third page - {siteMetadata.title} {siteMetadata.airtable.tokens.readdata}</h1>
	<ol type="1">
	<li><a href={`https://news.yahoo.co.jp/pickup/6479425`}>ガザ空爆 1日で子含む436人死亡</a></li>
	<li><a href="#">広域強盗 指示役の男3人を再逮捕</a></li>
	<li><a href="#">所得税を定額で4万円減税案 検討</a></li>
	<li><a href="#">レンタカー15歳遺体 都内で接触か</a></li>
	<li><a href="#">24歳でドナーに 感謝の手紙は宝物</a></li>
	<li><a href="#">六甲のおいしい水どこへ 業界軌跡</a></li>
	<li><a href="#">VIVANT監督 ドラム人気は想定外</a></li>
	<li><a href="#">山崎まさよし公演 なぜ炎上</a></li>
	</ol>
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
	)
}

export const Head = () => <Seo title="Page three" />

export default ThirdPage