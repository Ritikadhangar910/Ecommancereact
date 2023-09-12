import { useState } from "react";
import CreateContext from "./create-context";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(null);
  function AddItemstofun(item) {
    setItems((prev) => {
      return [...prev, item];
    });
  }

  const userIsLoggedIn = !!token;

  function loginHandler(token) {
    setToken(token);
  }
  function logoutHandler() {
    setToken(null);
  }

  const createcontext = {
    items: items,
    addItems: AddItemstofun,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <CreateContext.Provider value={createcontext}>
      {props.children}
    </CreateContext.Provider>
  );
};
export default ContextProvider;
