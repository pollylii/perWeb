import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import { Carousel } from 'antd';
import './index.scss'

//定义UI组件
class Home extends Component {
	state={
		imgs: [{
			id: '1',
			url: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
		}, {
			id: '2',
			url: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
		}, {
			id: '3',
			url: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
		},  {
			id: '4',
			url: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
		}],
		img: '../../images/imgs/cat1.jpg'
		
	}
	render() {
		const carouselStyle = {
			height: '100%'
		}
		const imgStyle = {
			margin:' 0 auto',
			// maxHeight: '100%'
		}
		const {imgs} = this.state;
		
		const img =(this.state.img);
		
		
		return (
			<div className="homepage">
				<Carousel autoplay={true} style={carouselStyle}>
					{
						imgs.map(item=> {
							return (
								<div key={item.id}>
									<img  style={imgStyle} src={item.url} alt={item.url}/>
								</div>
							)
						})
					}
				</Carousel>
				{/* <img src={img} alt={img} /> */}
			</div>
		)
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state => ({
	}),
	{}
)(Home)
// export default Home

