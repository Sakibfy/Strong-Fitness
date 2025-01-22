
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();


   const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  const updateUserProfile = (name,photo) => {
   return updateProfile(auth.currentUser, {
  displayName: name, photoURL: photo
})
  }

  const googleSingIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
    
  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);

    //get jwt token
    if (currentUser) {
  
      // get token and store client
      const userInfo = { email: currentUser.email };
      axiosPublic.post('/jwt', userInfo)
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
            setLoading(false)
        }
      })
    } else {
      localStorage.removeItem('access-token');
      setLoading(false)
      }
      
  })
    return () => {
      return unsubscribe();
    }
},[axiosPublic])


  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    logOut,
    updateUserProfile,
    googleSingIn,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;