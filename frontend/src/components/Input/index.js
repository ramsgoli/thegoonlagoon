import React from 'react'
import styled from 'styled-components/macro'

const InputWrapper = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  height: 63px;
  width: 100%;
  margin-bottom: 27px;
  padding: 23px 18px;
  font-size: 14px;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
`

const Input = (props) => {
  return (
    <InputWrapper {...props} />
  )
}

export default Input
