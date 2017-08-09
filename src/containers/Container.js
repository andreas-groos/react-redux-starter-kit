import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import * as coinDataActions from '../actions/coinDataActions'
import Loader from '../components/Loader'

class Container extends Component {

  constructor() {
    super()
    this.state = {

    }
  }
  // fetchData() {
  //   axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
  //     .then(response => {
  //       this.props.loading(true)
  //       console.log(response.data)
  //     })
  // }
  componentWillMount() {}
  componentDidMount() {
    this.props.fetchCoinData()

  }


  render() {
    return (
      <div>
        { /* Displays spinner if data is not yet fetched */ }
        <Loader loading={ this.props.coinData.loading } />
      </div>
    )
  }
}
// FIXME: state doesn't get pushed to props
const mapStateToProps = (state, ownProps) => {
  return {
    coinData: state.coinData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loading: (isLoading) => dispatch(coinDataActions.loading(isLoading)),
    fetchCoinData: () => dispatch(coinDataActions.fetchCoinData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)