import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// 组件
import Layout from './layout'
// js
import store from './redux/store'
//  css
import "antd/dist/antd.css";//引入样式
import "./index.scss"

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			{/* 此处需要用Provider包裹Layout，目的是让Layout所有的后代容器组件都能接收到store */}
			<Provider store={store}>
				<Layout />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
)