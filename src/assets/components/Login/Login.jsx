import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const githubProvider = new GithubAuthProvider();

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target
    const password = form.password.value;
    const email = form.email.value;
    console.log(password,email)
    signIn(email,password)
    .then(result=>{
        const loggedUser = result.user;
        
    })
    .cath(error =>{
        console.error(error.message)
    })
  }

  const handleGoogleLogin =()=>{
    googleSignIn()
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
    })
    .catch(error =>{
        console.error(error.message)
    })
  }

  const handleGithubLogin =()=>{
    googleSignIn(githubProvider)
    .then(result=>{
        const loggedUser = result.user;
        
    })
    .cath(error =>{
        console.error(error.message)
    })
  }

  return (
    <div>
      <Container className="w-25 mx-auto my-5">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-success">
           Don't have an account? <Link to='/register'>Register</Link>
          </Form.Text>
        </Form>
      </Container>
      <div className="w-25 mb-5 mt-1 mx-auto">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn btn-outline-primary me-3 "
        >
          Login with google <FaGoogle className="text-dark"></FaGoogle>{" "}
        </button>
        <button type="button"
         onClick={handleGithubLogin}
         className="btn btn-outline-primary">
          Login with github <FaGithub className="text-dark"></FaGithub>{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
