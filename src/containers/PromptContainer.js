import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className='jumbotron col-sm-8 col-sm-offset-2 text-center'>
        <h1>Where in the hell am I?</h1>
        <div className='col-sm-12'>
          <form>
            <div className='form-group'>
              <input
                className='form-control'
                placeHolder='email@address.com'
                type='text'/>
              <input
                className='form-control'
                placeHolder='********'
                type='password'/>
            </div>
            <div className='form-group col-sm-4 col-sm-offset-4'>
              <button
                className='btn btn-block btn-warning btn-lg'
                type='submit'>
                Tell Me More
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})