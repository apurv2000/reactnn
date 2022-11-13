import PropTypes from 'prop-types'
import React, { Component } from 'react'
import loading from './loading.gif'

//function based components

const spinner=()=>{
  return (
    <div>
      <img src={loading} alt="loading"/>
    </div>
  )
}
//class based component

// export class spinner extends Component {
//   static propTypes = {}

//   render() {
//     return (
//       <div><img src={loading} alt="loading"/></div>
//     )
//   }
// }

export default spinner