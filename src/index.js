import React from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-globally'
import App from './App/App'

const initialState = {
  go_to:"",
  enhancement: undefined,
  classification: undefined,
  filename: undefined,
}

ReactDOM.render(
  <Provider globalState={initialState}>
    <App />
  </Provider>,
  document.getElementById('root')
)

