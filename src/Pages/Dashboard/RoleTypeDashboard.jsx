
import { Navigate } from 'react-router-dom';
import useRole from '../../hooks/useRole';


const RoleTypeDashboard = () => {
const [role] = useRole()



if (role === 'admin') return <Navigate to='/dashboard/AppliedTrainer' />
if (role === 'trainer') return <Navigate to='/dashboard/manageslots' />
if (role === 'member') return <Navigate to='/dashboard/ProfilePage' />
return (
    <div>
      
    </div>
  );
};

export default RoleTypeDashboard;