import React, { Component } from 'react'
import MDSpinner from "react-md-spinner";



const Loader = (props) => {
  if (props.loading) {
    return (  <div style={ { width: '100%', display: 'flex', justifyContent: 'center' } }>
                <MDSpinner size={ 100 } singleColor	={'#d24735'}/>
              </div>
    )
  } else return null
}
export default Loader