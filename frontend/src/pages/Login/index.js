import React from 'react'
import { connect } from 'react-redux'

import Panel from '../../components/Panel'
import Logo from '../../components/Logo'
import AuthWrapper from '../../components/AuthWrapper'
import SignUpHint from './components/SignUpHint'
import Form from './components/form'
import { Login } from '../../reducers'

class LoginContainer extends React.Component {
  render() {
    return (
      <AuthWrapper>
        <Logo />
        <Panel>
          <Form handleClick={this.props.login} />
        </Panel>
        <SignUpHint />
      </AuthWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(Login(username, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
