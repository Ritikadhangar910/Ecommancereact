import React from "react";
const CreateContext = React.createContext({
  items: [],
  addItems: (items) => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
export default CreateContext;
