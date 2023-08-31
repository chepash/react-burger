import { FC } from 'react'
import { Navigate, RouteProps, useLocation } from 'react-router-dom'
import { getIsLoggedIn } from '../../services/selectors/user-selectors'
import { useSelector } from '../../services/types/store'

type TProtectedRouteElementProps = {
  onlyUnAuth?: boolean
} & RouteProps

const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({
  element,
  onlyUnAuth = false,
}) => {
  const location = useLocation()
  const isLoggedIn = useSelector(getIsLoggedIn)

  if (onlyUnAuth && isLoggedIn) {
    const { from } = location.state || { from: { pathname: '/' } }
    return <Navigate to={from} replace />
  }

  if (onlyUnAuth && !isLoggedIn) {
    return <>{element}</>
  }

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <>{element}</>
}

export default ProtectedRouteElement
