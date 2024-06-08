import { Navigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';



// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isUserAuthenticated }) => {
    if (!isUserAuthenticated) {
      return <Navigate to="/" replace />;
    }
  
    return <AuthLayout />;
  };
  
  export default ProtectedRoute;