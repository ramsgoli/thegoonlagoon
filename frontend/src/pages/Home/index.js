import React from 'react'
import styled from 'styled-components/macro'

import Logo from '../../components/Logo'
import AuthButtons from '../../components/AuthButtons'

const HomeWrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.main};
`

const Home = () => {
  return (
    <HomeWrapper>
      <Logo />
      <AuthButtons />
    </HomeWrapper>
  )
}

export default Home
