import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { SET_REDIRECT_PATH } from '../../services/actions/login-actions'
import { getUser } from '../../services/actions/user-actions'

export function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch()
  const [isUserLoaded, setUserLoaded] = useState(false)
  const location = useLocation()

  const init = async () => {
    await dispatch(getUser()).then(() => setUserLoaded(true))
  }

  const isLoggedIn = useSelector((store) => store.userState.isLoggedIn)

  useEffect(() => {
    init()
  }, [])

  if (!isUserLoaded) {
    return null
  }

  if (!isLoggedIn) {
    dispatch({ type: SET_REDIRECT_PATH, payload: location.pathname })
    return <Navigate to="/login" />
  }

  return isLoggedIn ? element : <Navigate to="/login" />
}
