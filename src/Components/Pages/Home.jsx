import React from 'react'
// import { Button, Card, Carousel } from 'react-bootstrap'
import Products from '../Modules/Products'
import { Button, Carousel } from 'react-bootstrap'
import "../../App.css"

const Home = () => {
  return (
    <>
      <div className=" w-100 ">
        <Carousel>
          <Carousel.Item>
            <img
              src="/images/banner1.webp"
              alt="firstslide"
              className="d-block w-100 "
              style={{ height: "82vh", objectFit: "fill" }}
            />
            <Carousel.Caption>
              <Button variant="success" style={{ width: "120px" }}>
                Buy Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/banner2.webp"
              alt="firstslide"
              className="d-block w-100 h-80"
              style={{ height: "82vh", objectFit: "fill" }}
            />
            <Carousel.Caption>
              <Button variant="success" style={{ width: "120px" }}>
                Buy Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/images/banner2.webp"
              alt="firstslide"
              className="d-block w-100 "
              style={{ height: "82vh", objectFit: "fill" }}
            />
            <Carousel.Caption>
              <Button variant="success" style={{ width: "120px" }}>
                Buy Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="banner2">
        <div className="insidebanner">
          <h2 className="textbanner2">
            Our very new shades of green. <br />
            Check out our latest sales and offer
          </h2>
          <Button className='btnbanner2' variant="success" >
            view all offers
          </Button>
        </div>
      </div>

      {/* <div className="container mt-5 d-flex" style={{justifyContent:"space-between"}}>
   <div className="row row-3">
    <div className="col col-sm-3">
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src="/images/download.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Speed Car Wash is offering a wide range of washing services to the car owners including the top wash to entire internal detailing or whether a paint protection treatment...
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col col-sm-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/download.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col col-sm-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/download.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col col-sm-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/download.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   </div>

   
   </div> */}

      <Products />

      <div className="bottom">
        <div className="head1">
          <h2>Why Ugaoo</h2>
        </div>
        <div className="head2">
          <div className="btcontent">
            <div className="btlogo">
              <img src="/images/why1.avif" alt="" />
            </div>
            <div className="bttext">Secure and Recyclable Packaging</div>
          </div>
          <div className="btcontent">
            <div className="btlogo">
              <img src="/images/why2.avif" alt="" />
            </div>
            <div className="bttext">Free Replacements if Damaged</div>
          </div>
          <div className="btcontent">
            <div className="btlogo">
              <img src="/images/why3.avif" alt="" />
            </div>
            <div className="bttext">Self-Watering Pots with Every Plant</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home