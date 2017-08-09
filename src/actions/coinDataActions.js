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
  return {
    type: 'RECEIVE_COINDATA',
    currencies: json.data.children.map(child => child.data),
  }
}

export function fetchCoindData() {
  return function(dispatch) {
    dispatch(loading(true))
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
    )
      .then(json =>
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.

      dispatch(receiveCoinData(json))
    )
  }
}
