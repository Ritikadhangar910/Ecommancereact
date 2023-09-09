import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const portalElement = document.getElementById("overlays");

const Opencart = (props) => {
  const cartElements = [
    {
      title: "Album1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Album2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Album3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  function closeCart() {
    props.setopen(false);
  }
  return (
    <>
      {ReactDOM.createPortal(
        <div className="myCart">
          <div className="front-each-other">
            <h3>Cart</h3>
            <Button
              variant="outline-warning"
              className="crossbtn"
              onClick={closeCart}
            >
              &#10060;
            </Button>
          </div>
          <div className="heading-myCart">
            <h4>Item</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
          </div>
          {cartElements.map((item) => (
            <div className="flexitems" key={item.title}>
              <div>
                <Image
                  className="imgclass"
                  src={item.imageUrl}
                  rounded
                  height={"100px"}
                  width={"100px"}
                />
                <div>{item.title}</div>
              </div>
              <div>{item.price}</div>
              <div>
                <span>
                  <Button variant="outline-warning">1</Button>
                  <Button variant="danger">Remove</Button>
                </span>
              </div>
            </div>
          ))}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Opencart;
