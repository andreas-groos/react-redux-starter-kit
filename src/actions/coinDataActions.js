export function fetchData() {
  return {
    type: 'FETCH_DATA'
  }
}

export function loading(isLoading) {
  return {
    type: 'LOADING',
    isLoading: isLoading
  }
}

export function receiveCoinData(json) {
  console.log('JSON', json)
  return {
    type: 'RECEIVE_COINDATA',
    currencies: json
  }
}

export function fetchCoinData() {
  return function(dispatch) {
    console.log('fetchdata')
    dispatch(loading(true))
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(

        response => response.json(),
        error => console.log('An error occured.', error)
    )
      .then(json => {
        dispatch(receiveCoinData(json))
        dispatch(loading(false))
      }
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.

    )
  }
}
