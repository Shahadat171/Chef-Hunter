import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div className="w-50 mx-auto mt-5">
       <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => 
        <button onClick={toPdf} className="btn btn-primary">Dwonload</button>}
        </Pdf>
        <div ref={ref}>
      <div>
        <p>
          1.What is the differences between uncontrolled and controlled
          components?
        </p>
        <p>
          Ans:An uncontrolled component is a component that manages its own
          state internally, and the parent component does not have any control
          over its state. In other words, the component keeps track of its own
          state and changes it internally, without requiring any input or
          control from the parent component. An example of an uncontrolled
          component is an HTML input element that uses its own internal state to
          keep track of user input. On the other hand, a controlled component is
          a component that relies on the parent component to manage its state.
          The parent component passes down the state as a prop, and the child
          component can only modify the state by calling a callback function
          passed down from the parent component. In other words, the parent
          component has complete control over the state of the child component.
          An example of a controlled component is a custom input component that
          receives its value as a prop and calls a callback function to notify
          the parent component when the value changes.
        </p>
      </div>
      <div>
        <p>2.How to validate React props using PropTypes?</p>
        <p>
          Ans:In React, we can use PropTypes to validate the props passed to a
          component. PropTypes is a built-in library that allows we to specify
          the type and shape of each prop, and will throw a warning in the
          console if the prop does not match the specified type or shape. To use
          PropTypes, we need to import the prop-types library and set the
          propTypes property of wer component to an object that specifies the
          type and shape of each prop. we can use various PropTypes validators
          such as string, number, bool, array, object, func, etc. Additionally,
          we can use PropTypes to specify required props, default values, and
          more complex prop types such as arrays of objects or objects with
          nested properties. By using PropTypes to validate wer props, we can
          catch errors early in development, ensure that wer code is more robust
          and reliable, and make it easier for other developers to understand
          how to use wer components correctly.
        </p>
      </div>
      <div>
        <p>3.What is the difference between nodejs and express js?</p>
        <p>
          Ans:Node.js is a runtime environment for executing JavaScript code on
          the server-side. It provides a platform for building scalable and
          high-performance network applications, including web servers,
          real-time chat applications, and API servers. With Node.js, developers
          can write server-side code using JavaScript, which makes it easier to
          use the same programming language for both client-side and server-side
          development. Express.js, on the other hand, is a web application
          framework built on top of Node.js. It provides a set of tools and
          features for building web applications and APIs, such as routing,
          middleware, and template engines. Express.js is designed to simplify
          the process of building web applications with Node.js by providing a
          set of abstractions that handle common tasks such as handling HTTP
          requests and responses, parsing data, and managing sessions.
        </p>
      </div>
      <div>
        <p>4.What is a custom hook, and why will you create a custom hook?</p>
        <p>
          Ans:A custom hook is a reusable function in React that encapsulates a
          specific piece of logic and allows it to be shared between
          components.If you find yourself writing the same logic over and over
          again in different components, you can create a custom hook to
          encapsulate that logic and reuse it across your application.Custom
          hooks can help abstract away complex logic and make your components
          simpler and easier to understand. Custom hooks can help keep your code
          organized by separating concerns and grouping related logic together
          in a single place.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Blog;
