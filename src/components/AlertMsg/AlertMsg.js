import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { CSSTransition } from 'react-transition-group';

export default function AlertMsg() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CSSTransition in={show} timeout={300} classNames='fade' unmountOnExit>
      <Alert variant='success' className='mb-0'>
        <p>Hey {localStorage.getItem('name')}, your booking is confirmed 🎉</p>
      </Alert>
    </CSSTransition>
  );
}
