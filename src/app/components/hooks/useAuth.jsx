import React, { useContext, useState, useEffect } from "react";
import api from "../../api";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false); // change by hand
  const currentUserId = "user_1"; // change by hand
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.users.getUserById(currentUserId).then((data) => setCurrentUser(data));
  }, [currentUserId]);

  useEffect(() => {
    if (currentUser) {
      setIsLoading(false);
    }
  }, [currentUser]);

  const handlelogOut = () => {
    // only logOut
    setAuth(false);
    setCurrentUser();
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, currentUser, isLoading, handlelogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
