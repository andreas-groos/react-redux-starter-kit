import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import * as coinDataActions from '../actions/coinDataActions'
import CoinDetails from '../components/CoinDetails'
import Loader from '../components/Loader'
import Ticker from '../components/Ticker'
import List from '../components/List'

class Container extends Component {

  constructor() {
    super()
    this.state = {

    }
    this.handleTableRowClick = this.handleTableRowClick.bind(this)

  }

  componentWillMount() {
    this.props.loading(true)
  }
  componentDidMount() {
    // Fetch new data every minute
    this.props.fetchCoinData()
    setInterval(
      () => this.update(),
      600000)

  }

  handleTableRowClick(e) {
    this.props.setActiveCoin(e)
  }
  update() {
    this.props.fetchCoinData()
  }



  render() {
    return (
      <div>
        { /* Displays spinner if data is not yet fetched */ }
        <Ticker />
        <Loader loading={ this.props.coinData.loading } />
        <List currencies={ this.props.coinData.currencies } onTableRowClick={ this.handleTableRowClick } />
        <hr/>
        { this.props.coinData.activeCoin ? <CoinDetails coin={ this.props.coinData.activeCoin } /> : null }
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    coinData: state.coinData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoinData: () => dispatch(coinDataActions.fetchCoinData()),
    loading: (isLoading) => dispatch(coinDataActions.loading(isLoading)),
    setActiveCoin: (coin) => dispatch(coinDataActions.setActiveCoin(coin))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)