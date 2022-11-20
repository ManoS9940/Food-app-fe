import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'
function AdminNav() {
  let navigate = useNavigate()
  return <>
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="javascript(void)">Food-Token-App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={()=>navigate('food-management')}>Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</>
}

export default AdminNav