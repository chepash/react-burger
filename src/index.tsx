import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './components/app/app'
import './index.scss'
import { configureStore } from './services/store'

export const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
