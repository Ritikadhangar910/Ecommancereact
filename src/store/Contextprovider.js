import { useState } from "react";
import CreateContext from "./create-context";

const ContextProvider = (props) => {
  function checkLocalStorage() {
    let item = localStorage.getItem("item");
    if (!item) {
      return null;
    }
    const now = new Date();
    item = JSON.parse(item);
    if (now.getTime() > item.expire) {
      localStorage.removeItem("item");
      return null;
    } else {
      return item.token;
    }
  }
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(checkLocalStorage);
  function AddItemstofun(item) {
    setItems((prev) => {
      return [...prev, item];
    });
  }

  const userIsLoggedIn = !!token;

  function loginHandler(token) {
    setToken(token);
    const now = new Date();
    const expirey = new Date(now.getTime() + 2 * 60000);
    let item = {
      token: token,
      expire: expirey.getTime(),
    };
    item = JSON.stringify(item);
    localStorage.setItem("item", item);
  }
  function logoutHandler() {
    setToken(null);
    localStorage.removeItem("item");
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
