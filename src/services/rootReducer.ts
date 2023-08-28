import { combineReducers } from 'redux'

import { constructorReducer } from './reducers/constructor-reducer'
import { ingredientsReducer } from './reducers/ingredients-reducer'
import { loginReducer } from './reducers/login-reducer'
import { modalReducer } from './reducers/modal-reducer'
import { orderReducer } from './reducers/order-reducer'
import { passwordResetReducer } from './reducers/password-reset-reducer'
import { passwordRestoreReducer } from './reducers/password-restore-reducer'
import { profileReducer } from './reducers/profile-reducer'
import { registerReducer } from './reducers/register-reducer'
import { userReducer } from './reducers/user-reducer'
import { feedReducer } from './reducers/feed-reducer'

export const rootReducer = combineReducers({
  feedState: feedReducer,
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
