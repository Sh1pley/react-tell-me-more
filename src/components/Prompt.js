import React from 'react';
import styles from '../styles';
import { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onUpdatePassword: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  },
  render() {
    return (
      <div className='jumbotron col-sm-8 col-sm-offset-2 text-center' style={styles.transparentBg}>
        <h1>Let's Do a Thing!</h1>
        <div className='col-sm-12'>
          <form onSubmit={this.props.onSubmitUser}>
            <div className='form-group'>
              <input
                className='form-control'
                placeholder='email@address.com'
                onChange={this.props.onUpdateUser}
                value={this.props.username}
                type='text'/>
              <input
                className='form-control'
                placeholder='********'
                onChange={this.props.onUpdatePassword}
                value={this.props.password}
                type='password'/>
            </div>
            <div className='form-group col-sm-4 col-sm-offset-4'>
              <button
                className='btn btn-block btn-warning btn-lg'
                type='submit'>
                {this.props.header}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})