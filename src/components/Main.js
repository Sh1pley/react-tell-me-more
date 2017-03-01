import React from 'react';
import '../Main.css'

export default React.createClass({
  render() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
})