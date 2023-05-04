import React from 'react';
import { useContext } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
// import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';



const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photo.value;
        console.log(name, email, password, photoURL)
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .cath(error =>{
            console.error(error.message)
        })
    }

    return (
        <div>
              <Container className="w-25 mx-auto my-5">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>photoURL</Form.Label>
            <Form.Control type="text" name='photo' placeholder="Enter photo url" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-success">
          Already have an accouont? <Link to='/login'>Login</Link>
          </Form.Text>
        </Form>
      </Container>
        </div>
    );
};

export default Register;