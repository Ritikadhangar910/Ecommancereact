import { useState } from "react";
import CreateContext from "./create-context";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);

  function AddItemstofun(item) {
    setItems((prev) => {
      return [...prev, item];
    });
  }

  const createcontext = {
    items: items,
    addItems: AddItemstofun,
  };
  return (
    <CreateContext.Provider value={createcontext}>
      {props.children}
    </CreateContext.Provider>
  );
};
export default ContextProvider;
