import React from "react";
import './App.css';

import { Nav } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className="Header" id="home" fixed="top">
        <h1>BRIZO STORE</h1>
        <Container>
          {/* main icon here */}
          <Row>
            <Col md={{ span: 3, offset: 9 }}>
              <Row md={4}>
                <Col xs={6} md={4}>
                  <Image src="" rounded fluid />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="" thumbnail />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="Navigation-Bar">
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link className="Navigation-Link" href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="Navigation-Link" href="#katalog">Katalog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="Navigation-Link" href="#review">Review</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="Navigation-Link" href="#contact">Hubungi Kami</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>

      <div className="Carousel-App">
        <ProductCarousel 
        pict1 = "https://i.pinimg.com/originals/13/58/53/135853049e6d7ab26ed383363d116bc6.jpg"
        pict2 = "https://images.squarespace-cdn.com/content/v1/50eca9dae4b0a16d22fa61ea/1573169535917-RXK253MLDMAE6B1J1ACN/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/IMG_1261.JPG"
        pict3 = "https://cdn.shopify.com/s/files/1/1626/7539/files/arlinda_800.jpg?v=1558027464"
        ></ProductCarousel>
      </div>

      <div className="Quotes">
        <h1>“The greatest glory in living lies not in never falling, but in rising every time we fall.”</h1>
        <p>Nelson Mandela</p>
      </div>

      <div className="Main-Pages" id="katalog">
        <h3 className="sub-title">Katalog</h3>
        <div className="Product-Card">
          <Row>
            <ProductCard 
            productTitle="Heavy Canvas Waist Bag Khaki" 
            productDescription="Inspired by a military surplus aesthetic, this khaki green shoulder bag from A.P.C. is a trusty canvas accessory that’s ready to be well used."
            productLink="https://cdn.webshopapp.com/shops/223289/files/319565365/256x256x1/recuperation-heavy-canvas-waist-bag-khaki.jpg"
            productPrice="189.000"
            brand = "A.P.C."
            ></ProductCard>

            <ProductCard 
            productTitle="Nela" 
            productDescription="SHOULDER BAG"
            productLink="https://cloud.camper.com/is/image/JGVzaG9wMTAk==/B2575-089_L.jpg"
            productPrice="145.000"
            brand = "Gucci"
            ></ProductCard>

            <ProductCard 
            productTitle="Pink Rainbow Tote Bag" 
            productDescription="Pink leather tote bag by Gucci, with glittery rainbow and cloud appliqués on one side. It has orange handles and a pink silky lining"
            productLink="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/g/u/gucci-pink-rainbow-tote-bag-29cm-281422-da3ccdc1dfb5a11c9797c9023448c7c9d1cf7d9d.jpg"
            productPrice="949.000"
            brand = "Gucci"
            ></ProductCard>

            <ProductCard 
            productTitle="Cute Sling Bag" 
            productDescription="SHOULDER BAG"
            productLink="https://cf.shopee.ph/file/fa89da4bc09f2301595bd475c5c6b675"
            productPrice="359.000"
            brand = "3way"
            ></ProductCard>

            <ProductCard 
            productTitle="Nela" 
            productDescription="SHOULDER BAG"
            productLink="https://target.scene7.com/is/image/Target/GUEST_9c2a3793-30c8-4b85-af99-5a1806facf25?wid=488&hei=488&fmt=pjpeg"
            productPrice="599.000"
            brand = "A.P.C."
            ></ProductCard>

            <ProductCard 
            productTitle="Nela" 
            productDescription="SHOULDER BAG"
            productLink="https://cloud.camper.com/is/image/JGVzaG9wMTAk==/B2575-089_L.jpg"
            productPrice="145.000"
            brand = "A.P.C."
            ></ProductCard>
            <ProductCard 
            productTitle="Heavy Canvas Waist Bag Khaki" 
            productDescription="Inspired by a military surplus aesthetic, this khaki green shoulder bag from A.P.C. is a trusty canvas accessory that’s ready to be well used."
            productLink="https://cdn.webshopapp.com/shops/223289/files/319565365/256x256x1/recuperation-heavy-canvas-waist-bag-khaki.jpg"
            productPrice="189.000"
            brand = "A.P.C."
            ></ProductCard>

            <ProductCard 
            productTitle="Nela" 
            productDescription="SHOULDER BAG"
            productLink="https://cloud.camper.com/is/image/JGVzaG9wMTAk==/B2575-089_L.jpg"
            productPrice="145.000"
            brand = "Gucci"
            ></ProductCard>

            <ProductCard 
            productTitle="Pink Rainbow Tote Bag" 
            productDescription="Pink leather tote bag by Gucci, with glittery rainbow and cloud appliqués on one side. It has orange handles and a pink silky lining"
            productLink="https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/g/u/gucci-pink-rainbow-tote-bag-29cm-281422-da3ccdc1dfb5a11c9797c9023448c7c9d1cf7d9d.jpg"
            productPrice="949.000"
            brand = "Gucci"
            ></ProductCard>

            <ProductCard 
            productTitle="Cute Sling Bag" 
            productDescription="SHOULDER BAG"
            productLink="https://cf.shopee.ph/file/fa89da4bc09f2301595bd475c5c6b675"
            productPrice="359.000"
            brand = "3way"
            ></ProductCard>

            <ProductCard 
            productTitle="Nela" 
            productDescription="SHOULDER BAG"
            productLink="https://target.scene7.com/is/image/Target/GUEST_9c2a3793-30c8-4b85-af99-5a1806facf25?wid=488&hei=488&fmt=pjpeg"
            productPrice="599.000"
            brand = "A.P.C."
            ></ProductCard>

            <ProductCard 
            productTitle="Nela" 
            productDescription="SHOULDER BAG"
            productLink="https://cloud.camper.com/is/image/JGVzaG9wMTAk==/B2575-089_L.jpg"
            productPrice="145.000"
            brand = "A.P.C."
            ></ProductCard>

          </Row>
        </div>

      </div>

      <div className="review-pages" id="review">
      <h3 className="sub-title">Review</h3>
      <div style={{ padding : "64px"}}>
        <ReviewCarousel></ReviewCarousel>
      </div>
      </div>

      <div className="Footer" id="contact">
        <Container>

          <Row>
            <Col style={{textAlign: "left", margin:"0px"}}>
              <h4>Brizo Store</h4>
              <p>Jl MH Thamrin Kav 28-30</p>
              <p>Plaza Indonesia Ex Lt 1/22-23</p>
              <p>Menteng, Jakarta</p>
              <p>021 2305237/021 2305319</p>
            </Col>
          </Row>
        </Container>
        <p style={{margin:"0px"}}> created by <a>TIM 1 SBF BISMIT</a></p>
      </div>
      <div style={{position:'fixed'}}>
        https://cdn.onlinewebfonts.com/svg/img_158933.png
      </div>
    </div>
  );
}

function ProductCarousel(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.pict1}
          alt="First slide"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.pict2}
          alt="Third slide"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.pict3}
          alt="Third slide"
          fluid
        />
      </Carousel.Item>
    </Carousel>
  );
}

function ProductCard(props) {
  return (
    <Card style={{ width: '270px', height: '460px', margin: '16px',borderRadius:'16px' }} >
      <Card.Img variant="top" src={props.productLink} style={{ borderRadius:'16px' }} />
      <Card.Body className="CardProduct">
        <Card.Title className="CardTitle">{props.productTitle}</Card.Title>
        <Card.Text>
          <p>{props.brand}</p>
          {/* <p style={{ fontSize: "12px"}}>{props.productDescription}</p> */}
          <p >Rp {props.productPrice}</p>
        </Card.Text>
          <Button variant="success" >Order</Button>
      </Card.Body>
    </Card>
  );
}

function ReviewCarousel(props){
  return(
    <Carousel style={{color :"black"}}>
      <Carousel.Item className="ReviewItem">
        <Carousel.Caption className="ReviewCaption">
          <h3>Pesanan sesuai deskripsi, mantaapp... semoga berkah dan manfaat</h3>
          <p>Denmas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="ReviewItem">
        <Carousel.Caption className="ReviewCaption">
          <h3>alhamdulillah terima kasih bnget.saya puas banget barang sesuai dengan pesanan saya. semoga lancar.. amin</h3>
          <p>Agus</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="ReviewItem">
        <Carousel.Caption className="ReviewCaption">
          <h3>Alhamdulillah....apik wis pokok e...mantul...mantab betul...😊,maju terus umkm Indonesia.</h3>
          <p>Satria</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="ReviewItem">
        <Carousel.Caption className="ReviewCaption">
          <h3>Syukaaak... bagus. Kliatannya akan awet... to admin makasih untuk keramahannya</h3>
          <p>Nira</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="ReviewItem">
        <Carousel.Caption className="ReviewCaption">
          <h3>barang nya mantap, tas buat mudik cukup nih respon pelapak ok pengiriman ok barang nya bagus banget terimakasih semoga lancar terus usaha nya gan</h3>
          <p>dededarmawan</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default App;
