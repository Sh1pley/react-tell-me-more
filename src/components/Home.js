import React from 'react';
import { Link } from 'react-router';
var styles = require('../styles/index').transparentBg;

export default React.createClass({
  render() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={styles}> 
        <h1>
          Tell Me More</h1>
        <p className='lead'>
          This is an attempt at ReactJS..</p>
        <Link to='/login'>  
          <button type='button' className='btn btn-warning'>Do a thing</button>
        </Link>



      </div>

      
    );
  }
})