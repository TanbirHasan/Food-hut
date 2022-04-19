import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';


const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
   if (!user.emailVerified) {
     return (
       <div className="mt-5 text-center">
         <h4 className="text-danger">Your email is not verified</h4>
         <p className="text-success">Please verify your email address</p>
         <button
           onClick={async () => {
             await sendEmailVerification();
             alert("Sent email");
           }}
         >
           Verify email
         </button>
       </div>
     );
   }
  return children;
};

export default RequireAuth;