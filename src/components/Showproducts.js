import "../App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import CreateContext from "../store/create-context";

const Showproducts = () => {
  const createContext = useContext(CreateContext);
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
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
            <Col xs={6} md={4} key={item.title}>
              <Card className="mb-3" style={{ width: "19rem" }}>
                <Card.Img variant="top" src={item.imageUrl} />
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
