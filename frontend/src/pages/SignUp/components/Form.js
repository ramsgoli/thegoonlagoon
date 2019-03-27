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

const NameWrapper = styled.div`
  display: flex;
  flex-flow: row;
`

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    loading: false,
    error: false
  }

  handleInput = e => {
    const target = e.target
    const name = target.name
    this.setState(oldState => ({
      [name]: target.value
    }))
  }

  handleSignup = e => {
    e.preventDefault()

    const { firstName, lastName, username, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      return this.setState({
        error: true
      })
    }

    this.setState({
      loading: true
    })
    return this.props.handleClick(firstName, lastName, username, password)
  }

  render() {
    let buttonContents = 'Sign Up'
    if (this.state.loading) {
      buttonContents = <LoadingDots />
    }

    return (
      <FormWrapper> 
        <H1>Welcome to the Goon Lagoon.</H1>
        <H2>Sign up for an admin account if you are a goon.</H2>
        <NameWrapper>
          <Input type="text" placeholder="First Name" name="firstName" marginRight="7px" onChange={this.handleInput} />
          <Input type="text" placeholder="Last Name" name="lastName" marginLeft="7px" onChange={this.handleInput} />
        </NameWrapper>
        <Input type="text" placeholder="username" name="username" onChange={this.handleInput} />
        <Input type="password" placeholder="password" name="password" onChange={this.handleInput} />
        <Input type="password" placeholder="confirm password" name="confirmPassword" onChange={this.handleInput} />
        <Submit onClick={this.handleSignup}>
          { buttonContents }
        </Submit>
      </FormWrapper>
    )
  }
}

export default Form
