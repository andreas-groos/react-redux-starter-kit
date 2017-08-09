import moment from 'moment'

export default (state = [], action) => {
  switch (action.type) {
  case 'LOADING':
    console.log('LOADING')
    return Object.assign({}, state, {
      loading: action.isLoading,
      updateTime: moment()
    })
  default:
    return state
  }
}