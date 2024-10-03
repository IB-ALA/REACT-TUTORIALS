import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebaseConfig";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const [registerFormData, seteRgisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function registerWithFirebase() {
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      checkAuthState();
    };
  }, []);

  console.log(user);

  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        seteRgisterFormData,
        registerWithFirebase,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
