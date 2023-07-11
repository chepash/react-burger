import { combineReducers } from 'redux'
import { reducer as ingredientsReducer } from './reducers/ingredients'
import { reducer as constructorReducer } from './reducers/constructor'
import { reducer as orderReducer } from './reducers/order'

export const rootReducer = combineReducers({
  ingredientsState: ingredientsReducer,
  constructorState: constructorReducer,
  orderState: orderReducer,
})
