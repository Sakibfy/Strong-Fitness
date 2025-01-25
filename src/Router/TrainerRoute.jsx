import PropTypes from 'prop-types'
import useRole from '../hooks/useRole'
import { Navigate } from 'react-router-dom'
import Loding from '../Component/Loading/Loding'

const TrainerRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loding />
  if (role === 'trainer') return children
  return <Navigate to='/dashboard' replace='true' />
}

TrainerRoute.propTypes = {
  children: PropTypes.element,
}



export default TrainerRoute;