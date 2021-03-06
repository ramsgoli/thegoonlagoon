import React from 'react'
import styled from 'styled-components/macro'

import LoadingDots from '../../../components/LoadingDots'
import Input from '../../../components/Input'
import Submit from '../../../components/Submit'

const FormWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`

const H1 = styled.h1`
  margin-bottom: 18px;
`

const H2 = styled.h2`
  color: #747373;
  font-size: 18px;
  margin-bottom: 24px;
`

class Form extends React.Component {
  state = {
    username: '',
    password: '',
    loading: false
  }

  handleInput = e => {
    const target = e.target
    const name = target.name
    this.setState(oldState => ({
      [name]: target.value
    }))
  }

  handleLogin = e => {
    e.preventDefault()

    const { username, password } = this.state
    this.setState({
      loading: true
    })

    return this.props.handleClick(username, password)
  }

  render() {
    let buttonContents = 'Login'
    if (this.state.loading) {
      buttonContents = <LoadingDots />
    }

    return (
      <FormWrapper> 
        <H1>Welcome back.</H1>
        <H2>sign in to your admin account.</H2>
        <Input type="text" placeholder="username" name="username" onChange={this.handleInput} />
        <Input type="password" placeholder="password" name="password" onChange={this.handleInput} />
        <Submit onClick={this.handleLogin}>
          { buttonContents }
        </Submit>
      </FormWrapper>
    )
  }
}

export default Form
