import Button from "react-bootstrap/Button";
import "../App.css";
import { useContext, useState } from "react";
import Opencart from "./Opencart";
import CreateContext from "../store/create-context";

const Cart = () => {
  let createContext = useContext(CreateContext);
  createContext = createContext.items;
  const [open, setOpen] = useState(false);

  function openCart() {
    setOpen(true);
  }
  const btnvalue = createContext.length;
  return (
    <>
      {open && <Opencart setopen={setOpen} />}
      <div>
        <Button variant="info" onClick={openCart}>
          Cart
        </Button>
        <span className="button-gap"></span>
        <Button variant="outline-info">{btnvalue}</Button>
      </div>
    </>
  );
};

export default Cart;
