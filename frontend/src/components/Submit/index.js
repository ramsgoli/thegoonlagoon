import React from 'react'
import styled from 'styled-components/macro'

const SubmitWrapper = styled.button`
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

const Submit = (props) => {
  return (
    <SubmitWrapper {...props} />
  )
}

export default Submit
