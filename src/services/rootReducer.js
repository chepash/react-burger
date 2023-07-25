import { combineReducers } from 'redux'
import { reducer as ingredientsReducer } from './reducers/ingredients-reducer'
import { reducer as constructorReducer } from './reducers/constructor-reducer'
import { reducer as orderReducer } from './reducers/order-reducer'
import { reducer as modalReducer } from './reducers/modal-reducer'
import { reducer as registerReducer } from './reducers/register-reducer'
import { reducer as loginReducer } from './reducers/login-reducer'
import { reducer as passwordRestoreReducer } from './reducers/password-restore-reducer'
import { reducer as passwordResetReducer } from './reducers/password-reset-reducer'
import { reducer as profileReducer } from './reducers/profile-reducer'
import { reducer as userReducer } from './reducers/user-reducer'

export const rootReducer = combineReducers({
  ingredientsState: ingredientsReducer,
  constructorState: constructorReducer,
  orderState: orderReducer,
  modalState: modalReducer,
  registerState: registerReducer,
  loginState: loginReducer,
  passwordRestoreState: passwordRestoreReducer,
  passwordResetState: passwordResetReducer,
  profileState: profileReducer,
  userState: userReducer,
})
