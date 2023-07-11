import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './components/app/app'
import { Provider } from 'react-redux'
import { configureStore } from './services/store'
import { initialState } from './services/reducer'

const store = configureStore(initialState)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
