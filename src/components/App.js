import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from "react-mixin";

import {connect} from 'react-redux';

import { changeGreen, changeRed, changeYellow } from '../actions/actionCreators';

import Light from './light';

class App extends Component {

	start() {
		const dispatch = this.props.dispatch;
		var action;
		switch(this.props.color) {
			case 'GREEN':
				action = changeRed();
			break;

			case 'RED':
				action = changeYellow();
			break;

			case 'YELLOW':
				action = changeGreen();
			break;
		}

		setTimeout(() => {
			dispatch(action);
		}, this.props.delay * 1000);
	}

	render() {
		const {color, delay, dispatch} = this.props;

		return (
			<div>
				<Light color={color} delay={delay} />
				<button onClick={this.start.bind(this)}>Click</button>
			</div>
		);
	}
}

reactMixin.onClass(App, PureRenderMixin);

function mapStateToProps(state) {
	return {
		color: state.get('color'),
		delay: state.get('delay')
	};
}

export const ConnectedApp = connect(mapStateToProps)(App);