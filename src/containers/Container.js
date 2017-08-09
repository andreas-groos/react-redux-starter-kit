import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as coinDataActions from '../actions/coinDataActions'
import Loader from '../components/Loader'

class Container extends Component {

  constructor() {
    super()
    this.state = {

    }
  }
  componentWillMount() {}
  componentDidMount() {
    console.log('WILLMOINT')
    this.props.loading(true)

  }


  render() {
    return (
      <div>
        <h1 className="text-center">Container Element</h1>
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
    loading: (isLoading) => dispatch(coinDataActions.loading(isLoading))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)