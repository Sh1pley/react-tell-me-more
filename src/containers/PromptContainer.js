import React from 'react';
import Prompt from '../components/Prompt';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      username: '',
      password: ''
    }
  },
  handleUpdatePassword(e) {
    this.setState({
      password: e.target.value
    })
  },
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
    
    this.setState({
      username: '',
      password: ''
    });
    this.context.router.push({
      pathname: '/whereAmI',
      query: {
        username: username
        // password: password
      },
      state: {
        password: password
      }
    })
  },
  render() {
    return (
      <Prompt 
        onSubmitUser={this.handleSubmitUser} 
        onUpdateUser={this.handleUpdateUser}
        onUpdatePassword={this.handleUpdatePassword}
        header={this.props.route.header}
        username={this.state.username} />

    )
  }
})