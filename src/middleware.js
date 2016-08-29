/**
 * 记录所有被发起的 action 以及产生的新的 state。
 */
export const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  const nextState = store.getState()
  console.log('next state', nextState.toJS? nextState.toJS() : nextState )
  console.groupEnd(action.type)
  return result
}