
import { Navigate } from 'react-router-dom';
import useRole from '../../hooks/useRole';


const RoleTypeDashboard = () => {
  const [role] = useRole();



if (role === 'admin') return <Navigate to='/dashboard/allnewslettersubscribers' />
if (role === 'trainer') return <Navigate to='/dashboard/AddnewForum' />
if (role === 'member') return <Navigate to='/dashboard/ProfilePage' />
return (
    <div>
      
    </div>
  );
};

export default RoleTypeDashboard;