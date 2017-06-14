export default (state = [], action) => {
  switch (action.type) {
  case 'TEST':
    return Object.assign({}, state, {
      testProp: action.test
    })
  default:
    return state
  }
}