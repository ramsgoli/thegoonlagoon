import React from 'react'
import styled from 'styled-components/macro'

const SignUpHintWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin-top: 28px;
  color: #ffffff;
`

const Span = styled.span`
  font-weight: bold;
  cursor: pointer;
`

const SignUpHint = () => {
  return (
    <SignUpHintWrapper>
      <p>Don't have an account?&nbsp;</p>
      <Span>Sign Up</Span>
    </SignUpHintWrapper>
  )
}

export default SignUpHint
