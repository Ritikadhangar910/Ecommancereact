import { useState } from "react";
import CreateContext from "./create-context";

const ContextProvider = (props) => {
  const storeToken = localStorage.getItem("token");
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(storeToken);
  function AddItemstofun(item) {
    setItems((prev) => {
      return [...prev, item];
    });
  }

  const userIsLoggedIn = !!token;

  function loginHandler(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }
  function logoutHandler() {
    setToken(null);
    localStorage.removeItem("token");
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
