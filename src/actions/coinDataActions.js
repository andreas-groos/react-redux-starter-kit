// Add images to Data Json

function addImages(json) {
  json.map(e => {
    console.log(e.name)
    const logo = '/img/crypto-icons/128/color/' + e.name.toLowerCase() + '@2x.png'
    e.logo = logo
    return e
  })
  console.log('after map ', json)
  return json
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
        addImages(json)
        dispatch(receiveCoinData(json))
        dispatch(loading(false))
      }
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.

    )
  }
}
