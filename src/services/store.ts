import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { socketMiddleware } from './middleware/socketMiddleware'
import { rootReducer } from './rootReducer'

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, socketMiddleware()))
  )

  return store
}
