import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'

export const configureStore = (initialStore) => {
  const store = createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(applyMiddleware(thunk))
  )

  return store
}
