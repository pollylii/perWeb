import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
// import {connect} from 'react-redux'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import './index.scss'

//定义UI组件
class About extends Component {
	state = {
		img: '../images/imgs/cat1.jpg',
		url: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
	}
	render() {
		//console.log('UI组件接收到的props是',this.props);
		const img = (this.state.img);
		// const url = (this.state.url);
		console.log('img', img );
		return (
			<div className="about">
				  <Timeline mode="alternate">
					<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
					<Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo.
					</Timeline.Item>
					<Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
					<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
					<Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
						Technical testing 2015-09-01
					</Timeline.Item>
				</Timeline>
			</div>
		)
	}
}

//使用connect()()创建并暴露一个Count的容器组件
// export default connect(
// 	state => ({
// 	}),
// 	{}
// )(About)
export default About

