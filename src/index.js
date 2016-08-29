import React from 'react'
import ReactDOM from 'react-dom'
import {ConnectedApp} from './components/App'

import {Provider} from 'react-redux'

import {fromJS, Map} from 'immutable'

import {createStore, applyMiddleware} from 'redux'
import {logger} from './middleware'
import rootReducer from './reducers/rootReducer'

const createStoreWithMiddleware = applyMiddleware(
	logger
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
			<ConnectedApp />
		</Provider>,
		$app
	);
}

render();