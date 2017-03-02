import React from 'react';
import styles from '../styles'

export default React.createClass({
  render() {
    console.log(this)
    return (
      <div className='jumbotron col-sm-8 col-sm-offset-2 text-center' style={styles.transparentBg}>
        <h1>Let's Do This!</h1>
        <div className='col-sm-12'>
          <form>
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='email@address.com'
                type='text'/>
              <input
                className='form-control'
                placeholder='********'
                type='password'/>
            </div>
            <div className='form-group col-sm-4 col-sm-offset-4'>
              <button
                className='btn btn-block btn-warning btn-lg'
                type='submit'>
                {this.props.route.header}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})