import React from "react";
const CreateContext = React.createContext({
  items: [],
  addItems: (items) => {},
});
export default CreateContext;
