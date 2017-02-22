import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/stylesheets/styles.css';
import reduxPromise from 'redux-promise';
import {Router, Route, IndexRoute} from 'react-router';

ReactDOM.render(
	<Provider store={theStoreWithMiddleware}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="login" component={Login} />
				<Route path="register" component={Register} />
				<Route path="search/:term" component={Search} />
		<App />
	</Provider>,
document.getElementById('root')
);
