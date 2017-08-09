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
