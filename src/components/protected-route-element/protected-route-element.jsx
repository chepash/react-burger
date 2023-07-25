import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRouteElement = ({ element, onlyUnAuth = false }) => {
  const location = useLocation()

  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)

  if (onlyUnAuth && isLoggedIn) {
    const { from } = location.state || { from: { pathname: '/' } }
    return <Navigate to={from} replace />
  }

  if (onlyUnAuth && !isLoggedIn) {
    return element
  }

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return element
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.node.isRequired,
  onlyUnAuth: PropTypes.bool,
}

export default ProtectedRouteElement
