import { GithubAuthProvider} from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";


const githubProvider = new GithubAuthProvider();

const Login = () => {
  const navigate = useNavigate()
  const Location = useLocation()
  const from = Location.state?.from?.pathname || '/';
  console.log(from)
  const { signIn, googleSignIn,error,setError } = useContext(AuthContext);

  const handleLogin = (event) =>{
    event.preventDefault()
    setError('')
    const form = event.target
    const password = form.password.value;
    const email = form.email.value;
    console.log(password,email)
    signIn(email,password)
    .then(result=>{
        const loggedUser = result.user; 
        navigate(from , {replace : true})
    })
    .catch(error =>{
        setError(error.message)
    })
  }

  const handleGoogleLogin =()=>{
    googleSignIn()
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from , {replace : true}) 
    })
    .catch(error =>{
        console.error(error.message)
    })
  }

  const handleGithubLogin =()=>{
    googleSignIn(githubProvider)
    .then(result=>{
        const loggedUser = result.user; 
        navigate(from , {replace : true}) ; 
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
         <Form.Text className="text-success">
           Don't have an account? <Link to='/register'>Register</Link>
          </Form.Text>
          <br />
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p>{error}</p>
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
