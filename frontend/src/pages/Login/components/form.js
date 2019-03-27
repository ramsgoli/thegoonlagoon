import React from 'react'
import styled from 'styled-components/macro'

const FormWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`

const Input = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  height: 63px;
  width: 100%;
  margin-bottom: 27px;
  padding: 23px 18px;
  font-size: 14px;
`

const Submit = styled.button`
  height: 63px;
  width: 100%;
  background: #0EB815;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 24px;
  transition: background 0.25s;
  cursor: pointer;

  &:hover {
    background: #0C7410;
  }
`

class Form extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInput = e => {
    const target = e.target
    const name = target.name
    this.setState(oldState => ({
      [name]: target.value
    }))
  }

  render() {
    return (
      <FormWrapper> 
        <Input type="text" name="username" onChange={this.handleInput} />
        <Input type="password" name="password" onChange={this.handleInput} />
        <Submit>Login</Submit>
      </FormWrapper>
    )
  }
}

export default Form
