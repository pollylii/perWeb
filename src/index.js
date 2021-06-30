import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			{/* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */}
			<Provider store={store}>
				<App/>
			</Provider>
    	</React.StrictMode>
  	</BrowserRouter>,
	document.getElementById('root')
)