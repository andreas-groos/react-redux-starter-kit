import moment from 'moment'

export default (state = [], action) => {
  switch (action.type) {
  case 'LOADING':
    return Object.assign({}, state, {
      loading: action.isLoading,
      updateTime: moment()
    })
  case 'FETCH_DATA': {

  }
  case '': {

  }
  case 'RECEIVE_COINDATA':
    return Object.assign({}, state, {
      currencies: action.currencies
    })
  case 'SET_ACTIVE_COIN':
    return Object.assign({}, state, {
      activeCoin: action.activeCoin
    })
  default:
    return state
  }
}