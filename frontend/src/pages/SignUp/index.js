import React from 'react'
import { connect } from 'react-redux'

import Panel from '../../components/Panel'
import Logo from '../../components/Logo'
import AuthWrapper from '../../components/AuthWrapper'
import Form from './components/Form'
import LoginHint from './components/LoginHint'
import { SignUp } from '../../reducers'

class SignUpContainer extends React.Component {
  render() {
    return (
      <AuthWrapper>
        <Logo />
        <Panel>
          <Form handleClick={this.props.signup} />
        </Panel>
        <LoginHint />
      </AuthWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (firstName, lastName, username, password) => {
      dispatch(SignUp(firstName, lastName, username, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpContainer)
