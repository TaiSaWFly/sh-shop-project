import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(true); // change by hand
  const currentUserId = "user_1"; // change by hand

  const handlelogOut = () => {
    // only logOut
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, currentUserId, handlelogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
