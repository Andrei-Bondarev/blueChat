import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, FC, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext<User | null>(null);


interface Props {
   children: React.ReactNode;
 }

const AuthProvider: FC<Props> = ({children}) => {
   const [user, setUser] = useState<User | null>(null);
   
   useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
         if(user !== null)
            setUser(user)
      })
      return () => {
         unsub();
      }
   },[])

   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
export default AuthProvider;