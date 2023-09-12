import "../App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import CreateContext from "../store/create-context";
import { Link, useLocation } from "react-router-dom";

const Showproducts = () => {
  const location = useLocation();
  const createContext = useContext(CreateContext);
  const productsArr = [
    {
      id: 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  function Itemadded(title) {
    let product = productsArr.filter((item) => {
      return item.title === title;
    });

    createContext.addItems(product[0]);
  }

  return (
    <>
      <h2 className="Showproduct_heading">Showproducts</h2>
      <Container>
        <Row>
          {productsArr.map((item) => (
            <Col key={item.title}>
              <Card
                className="mb-3"
                style={{ width: "16rem", cursor: "pointer" }}
              >
                <Link to={`${location.pathname}/${item.id}`}>
                  <Card.Img variant="top" src={item.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <div className="front-each-other">
                    <Card.Text>${item.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        Itemadded(item.title);
                      }}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Showproducts;
