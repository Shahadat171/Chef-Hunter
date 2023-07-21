import React from "react";
import { useContext } from "react";
import { Button, Form, Container } from "react-bootstrap";
// import { Form, Link } from 'react-router-dom';
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../../logo.png"

const Register = () => {
  const { createUser, profileUpdateData, error, setError } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    console.log(name, email, password, photoURL);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        profileUpdateData(createdUser, name, photoURL);
        form.reset("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    //   <div>
    //         <Container className="w-25 mx-auto my-5">
    //   <Form onSubmit={handleRegister}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Name</Form.Label>
    //       <Form.Control type="text" name='name' placeholder="Enter name" />
    //       <Form.Text className="text-muted"></Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>photoURL</Form.Label>
    //       <Form.Control type="text" name='photo' placeholder="Enter photo url" />
    //       <Form.Text className="text-muted"></Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control required type="email" name='email' placeholder="Enter email" />
    //       <Form.Text className="text-muted"></Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control required type="password" name='password' placeholder="Password" />
    //     </Form.Group>
    //     <Form.Text className="text-success">
    //     Already have an accouont? <Link to='/login'>Login</Link>
    //     </Form.Text>
    //     <br />
    //     <Button variant="primary" type="submit">
    //       Register
    //     </Button>
    //     <p>{error}</p>
    //   </Form>
    // </Container>
    //   </div>
    <section class="bg-gray-50 dark:bg-gray-900 h-[100vh]">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-10 h-10 mr-2"
            src={logo}
            alt="logo"
          />
          Annamaya
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form onSubmit={handleRegister} class="space-y-4 md:space-y-6" action="#">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
               <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name='photo'
                    id="confirm-password"
                    placeholder="Your name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    PhotoUrl
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="confirm-password"
                    placeholder="photo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="text-white w-full bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium font-mono tracking-wider justify-center rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
              >
                
             Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
