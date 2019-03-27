import React from 'react'
import styled from 'styled-components/macro'

import Form from './form'

const LoginPanelWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  width: 518px;
  height: 386px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  padding: 18px 33px;
`

const H1 = styled.h1`
  margin-bottom: 18px;
`

const H2 = styled.h2`
  color: #747373;
  font-size: 18px;
  margin-bottom: 24px;
`

const LoginPanel = ({login}) => {
  return (
    <LoginPanelWrapper>
      <H1>Welcome back.</H1>
      <H2>sign in to your admin account.</H2>
      <Form login={login} />
    </LoginPanelWrapper>
  )
}

export default LoginPanel
