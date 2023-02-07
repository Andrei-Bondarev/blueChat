import { User } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
   children: React.ReactNode;
   user: User | null;
 }
 
const ProtectedRoute: React.FC<Props> = ({ children, user }) => {
   const navigate = useNavigate();
   if(user === null)
      navigate('/login');
   return <>{children}</>
}
export default ProtectedRoute;