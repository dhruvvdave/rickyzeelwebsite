import LoginGate from './LoginGate.jsx'
import { useGuest } from '../context/GuestContext.jsx'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useGuest()

  if (!isAuthenticated) {
    return <LoginGate />
  }

  return children
}
