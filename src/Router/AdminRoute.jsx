import PropTypes from 'prop-types'
import useRole from '../hooks/useRole'

import { Navigate } from 'react-router-dom'
import Loding from '../Component/Loading/Loding'

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <Loding></Loding>
  if (role === 'admin') return children
  return <Navigate to='/dashboard' replace='true' />
}

AdminRoute.propTypes = {
  children: PropTypes.element,
}

export default AdminRoute