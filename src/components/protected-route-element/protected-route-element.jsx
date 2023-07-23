import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../services/actions/user-actions'

export function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch()
  const [isUserLoaded, setUserLoaded] = useState(false)

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

  return isLoggedIn ? element : <Navigate to="/login" />
}
