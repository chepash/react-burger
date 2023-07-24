import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { SET_REDIRECT_PATH } from '../../services/actions/login-actions'

export function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch()
  const location = useLocation()

  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)

  if (isLoggedIn) {
    return element
  } else {
    dispatch({ type: SET_REDIRECT_PATH, payload: location.pathname })
    return <Navigate to="/login" />
  }
}
