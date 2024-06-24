import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../App.css";


const Products = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      product_name: "ExclusiveLane 'Mud Blossom' Table Planters",
      price: 725,
      image: "/images/pot1.jpg",
    },

    {
      id: 2,
      product_name:
        "ExclusiveLane 'Foliage Oasis' Hand-Painted Terracotta Planter Pots ",
      price: 604,
      image: "/images/pot2.jpg",
    },

    {
      id: 3,
      product_name:
        "ExclusiveLane 'Tree Trunks'  Terracotta Table Planter Pots ",
      price: 1049,
      image: "/images/pot3.jpg",
    },

    {
      id: 4,
      product_name:
        "ExclusiveLane 'Homely Cottage' Terracotta Table Planter Pots",
      price: 839,
      image: "/images/pot4.jpg",
    },

    {
      id: 5,
      product_name:
        "ExclusiveLane 'Indigo Vines' Handpainted Table Planter Pots Plant",
      price: 825,
      image: "/images/pot5.jpg",
    },

    {
      id: 6,
      product_name: "TechHark Crystal Flower Pots with tray for Home ",
      price: 239,
      image: "/images/pot6.jpg",
    },

    {
      id: 7,
      product_name:
        "UGAOO Football CeramicCrystal Flower Pots (White)           ",
      price: 399,
      image: "/images/pot7.jpg",
    },

    {
      id: 8,
      product_name: " Marvel Avengers Infinity War Pot Groot Wooden",
      price: 299,
      image: "/images/pot8.jpg",
    },
  ]);
  return (
    <Container fluid className="d-flex mt-4">
      {/* <div className="row gap-2 "> */}
      <Row>
        {items.map((elem) => {
          return (
            //    <div className=" col-md-4 col-6 mt-2 " >

            //    </div>

            <Col lg="3" md="6" sm="6" className="mt-2">
              <Card key={elem.id} className="cardelem">
                <Card.Img
                  variant="top"
                  style={{
                    height: "200px",
                    width: "220x",
                    borderRadius: "10px",
                  }}
                  src={process.env.PUBLIC_URL + elem.image}
                />
                <Card.Body>
                  <Card.Title className="cardtitle">
                    {elem.product_name}
                  </Card.Title>
                  <Card.Text> ₹ {elem.price}</Card.Text>
                  <Button>Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {/* </div> */}
    </Container>
  );
};

export default Products;
