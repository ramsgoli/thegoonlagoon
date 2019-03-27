import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Route } from 'react-router'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { Auth } from './reducers'
import { ThemeProvider } from 'styled-components/macro'

import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'

const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [thunk, routerMiddleware(history)]
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger({collapsed: true})];
}

const store = createStore(
  combineReducers({
    Auth,
    router: connectRouter(history)
  }),
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

const theme = {
  main: '#282C34'
}

const Application = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'));

