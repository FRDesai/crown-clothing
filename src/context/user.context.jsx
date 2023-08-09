import { createContext, useState, useEffect } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/Firebase/firebase.utils";
//as the actual vlaue we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //empty dependency array meaning we want to run only at once

  //whenever this listener mounts, it will automatically check the authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  //Basically we will be able to access the value inside any of the components that is nested within the provider
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
