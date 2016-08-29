import { combineReducers } from 'redux'
import color from './color'
import delay from './delay'

/**
* 使用combineReducers时，要注意的是每一个reducer的名称必须要与state的key值一致，
* 可参考combineReducers.js源码
**/
// export default combineReducers({
// 	color,
// 	delay
// });


//使用了immutable就不能使用原生的{ combineReducers } from 'redux'，只能重写或者
//使用redux-immutable的combineReducers
export default function rootReducer(state, action) {
	return state.merge({
		color: color(state.get('color'), action),
		delay: delay(state.get('delay'), action)
	});
}