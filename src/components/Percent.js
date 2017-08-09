import React from 'react'

function Percent(props) {
  if (props.number > 1) {
    return (<div>
              { props.number }
            </div>)
  }
  return 'hello'
}
