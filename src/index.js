import React from 'react'
import ReactDOM from 'react-dom'
import {ConnectedApp} from './components/App'

import {Provider} from 'react-redux'

import {fromJS, Map} from 'immutable'

import {createStore, applyMiddleware, compose} from 'redux'
import {logger} from './middleware'
import rootReducer from './reducers/rootReducer'

import DevTools from './DevTools'

// const createStoreWithMiddleware = applyMiddleware(
// 	logger
// )(createStore);

const createStoreWithMiddleware = compose(
	applyMiddleware(
		logger
	),
	DevTools.instrument()
)(createStore);

var defaultData = fromJS({
	color: 'GREEN',
	delay: 5
});

const store = createStoreWithMiddleware(rootReducer, defaultData);

var $app = document.getElementById('app');

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<div>
				<ConnectedApp />
				<DevTools />
			</div>		
		</Provider>,
		$app
	);
}

render();