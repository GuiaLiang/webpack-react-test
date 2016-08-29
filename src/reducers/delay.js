import * as actionTypes from '../actions/actionTypes'

export default function delayChange(state=0, action) {
	switch(action.type) {
		case actionTypes.GREENTYPE: 
			state = 5;
			return state;

		case actionTypes.REDTYPE:
			state = 3;
			return state;

		case actionTypes.YELLOWTYPE:
			state = 2;
			return state;

		default:
			return state;
	}
}