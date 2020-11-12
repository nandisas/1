import React from 'react'
import Nandi from './Nandi'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Navbar, Row } from 'react-bootstrap';


function App() {
  return (
    <div>
    <Container fluid style={{background:'#f2ffe5'}}>

    <Container >
        <Row>
            <Col></Col>
            <Col xs={12} md={14}>
                <Navbar  style={{display: 'flex', justifyContent: 'center', background: 'linear-gradient(to right, rgba(255,0,0,0), blue, rgba(255,0,0,0))'}}>
                    <Navbar.Brand href="#home">Flood Inundation Mapping</Navbar.Brand>
                </Navbar>
            </Col>
            <Col></Col>
        </Row>
    </Container>

    <Container style={{marginTop: 10 }}>
    <Row noGutters>
    <Col></Col>
    <Col xs={12} md={14}>
        <Nandi />
    </Col>
    <Col></Col>
    </Row>
    </Container>

  <Container style={{marginTop: 40 }}>
  </Container>
  <Row noGutters>
    <Col></Col>
    <Col xs={12} md={14} style={{display: 'flex', justifyContent: 'center', fontFamily: "Arial", fontSize: 10}}>
    {'\u00A9'}2020, Saswata Nandi
    </Col>
    <Col></Col>
    </Row>  
  </Container>
    </div>
  )
}



export default App
