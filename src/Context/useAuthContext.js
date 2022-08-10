import AuthContext from "./AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const loggedIn = useContext(AuthContext);

  if (loggedIn === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }

  return loggedIn;
};

export default useAuthContext