import React from 'react';
import WhereAmI from '../components/WhereAmI';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      isLoading: true,
      userInfo: [],
      password: this.props.password
    }
  },
  componentDidMount() {
    var query = this.props.location.query;
    var pass = this.state.password;
    console.log('QUERY', pass);
  },
  render() {
    return (
      <WhereAmI
        isLoading={this.state.isLoading}
        userInfo={this.state.playersInfo} />
    )
  }
})