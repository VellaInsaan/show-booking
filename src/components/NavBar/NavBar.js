import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
  return (
    <div className='logo'>
      <Navbar expand='lg' variant='dark' bg='dark'>
        <Container>
          <Link className='link' to={'/'}>
            <Navbar.Brand className='logo-name'>
              BOOK <span className='red'>MY</span> SHOW
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}
