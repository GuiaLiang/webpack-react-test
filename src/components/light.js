import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import PureRenderMixin from 'react-addons-pure-render-mixin'
import reactMixin from 'react-mixin'

import '../../public/css/style.scss'

class Light extends Component {
	render() {
		const {color, delay} = this.props;

		return (
			<div>
				<h1>{color}</h1>
			</div>
		);
	}
}

reactMixin.onClass(Light, PureRenderMixin);

export default Light;