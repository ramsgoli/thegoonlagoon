import React from 'react'
import styled from 'styled-components/macro'

const LogoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #282C34;
  font-size: 24px;
  font-weight: 800;
  position: absolute;
  top: 36px;
  left: 36px;
`

const Logo = () => {
  return (
    <LogoWrapper>
      TGL
    </LogoWrapper>
  )
}

export default Logo
