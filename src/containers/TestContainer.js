import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as testActions from '../actions/testActions'

class Test extends Component {

  constructor() {
    super()
    this.state = {
      empty: 'state',
    }
  }
  componentDidMount() {
    this.props.test('Hello World')
  }


  render() {
    return (
      <div>
        { this.props.test }
      </div>
    )
  }
}
// FIXME: state doesn't get pushed to props
const mapStateToProps = (state, ownProps) => {
  return {
    testing: state.testing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: (input) => dispatch(testActions.test(input))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)