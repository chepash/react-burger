import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { SET_REDIRECT_PATH } from '../../services/actions/login-actions'

const ProtectedRouteElement = ({ element, onlyUnAuth = false }) => {
  const dispatch = useDispatch()
  const location = useLocation()

  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)

  if (onlyUnAuth && isLoggedIn) {
    return <Navigate to="/" replace />
  }

  if (onlyUnAuth && !isLoggedIn) {
    return element
  }

  if (!isLoggedIn) {
    dispatch({ type: SET_REDIRECT_PATH, payload: location.pathname })
    return <Navigate to="/login" />
  }

  return element
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.node.isRequired,
  onlyUnAuth: PropTypes.bool,
}

export default ProtectedRouteElement
