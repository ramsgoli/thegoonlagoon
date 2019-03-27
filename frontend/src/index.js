import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { routerReducer } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import Auth from './reducers'

import './index.css';
import App from './App';
import Login from './pages/Login'

const store = createStore(
  combineReducers({
    Auth,
    routing: routerReducer
  })
)

const Application = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'));

