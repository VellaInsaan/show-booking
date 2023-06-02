import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './BookMovie.css';

export default function BookMovie({ movie, setSubmitted }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleClose = () => {
    setShow(false);
    setName('');
    setEmail('');
    setAge('');
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
    } else {
      handleBookNow();
    }
  };

  const handleBookNow = () => {
    setSubmitted(true);
    handleClose();
  };

  return (
    <>
      <Button variant='danger' onClick={handleShow}>
        <b>BOOK TICKETS</b>
      </Button>

      <Modal show={show} onHide={handleClose} centered={true}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: 'rgb(248,68,100)', color: 'white' }}
        >
          <Modal.Title>Book "{movie.name}" now</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'white', color: 'black' }}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Enter your name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Satyam'
                autoFocus
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='satus2311@gmail.com'
                autoFocus
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type='text'
                placeholder='18'
                autoFocus
                required
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter your age.
              </Form.Control.Feedback>
            </Form.Group>
            <div className='book-buttons'>
              <Button variant='outline-secondary' onClick={handleClose}>
                CLOSE
              </Button>
              <Button variant='danger' type='submit'>
                BOOK NOW
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
