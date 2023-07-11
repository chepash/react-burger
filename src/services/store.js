import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducer'

export const configureStore = (initialStore) => {
  const store = createStore(rootReducer, initialStore, composeWithDevTools())

  return store
}
