import * as actionTypes from '../actions/actionTypes'

export default function colorChange(state="", action) {
	switch(action.type) {
		case actionTypes.GREENTYPE: 
			state = actionTypes.GREENTYPE;
			return state;

		case actionTypes.REDTYPE:
			state = actionTypes.REDTYPE;
			return state;

		case actionTypes.YELLOWTYPE:
			state = actionTypes.YELLOWTYPE;
			return state;

		default:
			return state;
	}
}