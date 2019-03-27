import React from 'react'
import styled from 'styled-components/macro'

const PanelWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  width: 518px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  padding: 18px 33px;
`

const Panel = ({children}) => {
  return (
    <PanelWrapper>
      {children}
    </PanelWrapper>
  )
}

export default Panel
