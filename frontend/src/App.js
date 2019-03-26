import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components/macro'
import './App.css'

const AppWrapper = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </AppWrapper>
    )
  }
}

export default App
