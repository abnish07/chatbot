import React from "react";
import getUserFromLocalStorage from "../utils/getUserFromLocalStorage";
import useAuthHandler, {
  UserAuth,
  DEFAULT_USER_AUTH,
} from "../customHooks/AuthHandler";

interface IAuthContextInterface {
  auth: UserAuth;
  setAuthStatus: (userAuth: UserAuth) => void;
  setUnauthStatus: () => void;
}
export const authContext = React.createContext<IAuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {},
});

const { Provider } = authContext;

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getUserFromLocalStorage()
  );
  return (
    <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </Provider>
  );
};

export default AuthContextProvider;
