import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber },
    });
  }

  return(
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Name" 
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Your PhoneNumber</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Enter PhoneNumber" 
          onChange={(event) => setPhoneNumber(event.target.value)}  
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default ContactForm;