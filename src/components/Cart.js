import Button from "react-bootstrap/Button";
import "../App.css";
import { useState } from "react";
import Opencart from "./Opencart";
const Cart = () => {
  const [open, setopen] = useState(false);
  function openCart() {
    setopen(true);
  }
  return (
    <>
      {open && <Opencart setopen={setopen} />}
      <Button variant="info" onClick={openCart}>
        Cart
      </Button>
    </>
  );
};
export default Cart;
