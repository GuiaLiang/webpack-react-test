import {fromJS, Map} from 'immutable'
import * as actionTypes from './actionTypes'

export function changeGreen() {
	return {
		type: actionTypes.GREENTYPE
	};
}

export function changeRed() {
	return {
		type: actionTypes.REDTYPE
	};
}

export function changeYellow() {
	return {
		type: actionTypes.YELLOWTYPE
	};
}