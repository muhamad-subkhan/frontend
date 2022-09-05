import React, {useEffect} from 'react'
import './homePage.css'
import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import icone from '../assets/img-icon.webp';
import bgImage from '../assets/wp5181598 1.png'
import bgBlack from '../assets/Rectangle 2.png'
import listMovie from '../component/listFilm.json'




function HomePage() {
  useEffect(function(){
    console.log(listMovie);
  },[])
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home"><img src={icone} style={{width: '34px'}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/tv_show">TV Show</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            
          </Nav>

          <Nav className="justify-content-center align-content-center flex-grow-1 mt-2">
          <p style={{color: 'red', fontWeight:'Bold', fontSize:'24px'}}>DumbFlix</p>
          </Nav>

          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
      <img src={bgImage} style={{width: '100%'}}>
      </img>
      <img src={bgBlack} style={{marginTop: '-210px', width: '100%'}}></img>
    </div>

    <div className='bg-black'>
     
      <a className='Tv ms-3'>
        TV Series
      </a>

        
      <Container fluid>
        <Row xs={6}>
              {listMovie.map(function (data){
                return (  
              <Col className='my-3'>           
              <Card.Img variant="top" src={data.image} style={{width: '100%'}} />
              <Card.Body>
                <Card.Title className='title text-white mt-2' style={{cursor: 'pointer', width: 'max-content'}}>
              {data.title}
                </Card.Title>
                <p className='text text-white mt-2' style={{cursor: 'pointer', width: 'max-content'}}>
                  {data.year}
                </p>
              </Card.Body>
              </Col>
                )
              })}
          </Row>
      </Container>
      
    </div>
    </>
  )
}


export default HomePage