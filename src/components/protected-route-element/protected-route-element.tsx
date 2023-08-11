import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

type TProtectedRouteElementProps = {
  element: ReactNode
  onlyUnAuth?: boolean
}

const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({
  element,
  onlyUnAuth = false,
}) => {
  const location = useLocation()

  // @ts-ignore
  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)

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
