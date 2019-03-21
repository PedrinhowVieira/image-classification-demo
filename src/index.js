import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-globally'
import App from './App/App'

const initialState = {
  enhancement: {
    done: false,
    data: undefined,
  },
  classification: undefined,
  filename: undefined,
}

ReactDOM.render(
  <Provider globalState={initialState}>
    <App />
  </Provider>,
  document.getElementById('root')
)

