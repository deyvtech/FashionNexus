import { Navigate } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import { useSelector } from 'react-redux';


// eslint-disable-next-line react/prop-types
const ProtectedRoute = () => {

    const {isAuthenticated} = useSelector((state) => state.auth)

    if (isAuthenticated) {
      return <Navigate to="/" replace />;
    }
  
    return <AuthLayout />;
  };
  
  export default ProtectedRoute;