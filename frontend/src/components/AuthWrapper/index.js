import React from 'react'
import styled from 'styled-components/macro'

const AuthWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`

const Auth = ({children}) => {
  return (
    <AuthWrapper>
      {children}
    </AuthWrapper>
  )
}

export default Auth
