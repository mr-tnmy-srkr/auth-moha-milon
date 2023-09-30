import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: "tanmoy sarkar" };

  return (
    <AuthContext.Provider value={authInfo}>

    {children}
    
    </AuthContext.Provider>
  );
};

AuthContext.propTypes = {
  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  // see https://reactjs.org/docs/rendering-elements.html for more info
  children: PropTypes.node,
};

export default AuthProvider;

/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the providerF
 * **/
