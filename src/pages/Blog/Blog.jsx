/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const Blog = () => {
  const questionList = [
    {
      q: 'Tell us the difference between uncontrolled and controlled components',
      a: "Controlled components are managed by the system itself and their behavior is governed by the system's rules and constraints, whereas uncontrolled components are not managed by the system and their behavior is determined by external factors. The main difference between these two types of components is that controlled components are part of the system and any changes must be made through the system, while uncontrolled components are external to the system and any changes must be made by their developer.",
    },
    {
      q: 'How to validate React props using PropsTypes',
      a: "React provides a way to validate props using PropTypes, a feature that allows developers to define the type of data and other constraints that a component's props should adhere to. To use PropTypes, a developer needs to import the PropTypes library and then define the prop types for the component. This can be done by adding a static propTypes object to the component class, where each property represents a prop and its corresponding type or shape. For example, to validate that a prop is a string, the developer would define the prop type as PropTypes.string. PropTypes also support other types like numbers, booleans, objects, arrays, and more, as well as custom validators. When a prop fails to meet its defined type or constraint, a warning will be logged in the console, helping to catch potential errors early on in the development process. PropTypes are a powerful tool for improving the reliability of a React application, and they can help make it easier to maintain and update code over time.",
    },
    {
      q: 'Tell us the difference between nodejs and express js.',
      a: 'Node.js and Express.js are two related technologies that are often used together in web development. Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications. The main difference between Node.js and Express.js is that Node.js provides the runtime environment and low-level functionality for building server-side applications, while Express.js provides a high-level API and middleware for building web applications. In other words, Node.js provides the foundation for building web applications, while Express.js provides the tools and framework for building those applications in a more efficient and organized way. While Node.js can be used to build any kind of server-side application, Express.js is specifically designed for building web applications and offers features like routing, middleware, and templating engines to make the process easier and more streamlined.',
    },
    {
      q: 'What is a custom hook, and why will you create a custom hook?',
      a: 'A custom hook in React is a function that starts with the prefix "use" and allows developers to reuse stateful logic across multiple components. Custom hooks are useful for reducing code duplication, improving code organization and readability, and sharing code between different parts of the application. They can also make it easier to test and debug code by isolating specific pieces of functionality. To create a custom hook, a developer defines a function that encapsulates the reusable logic and returns an object containing the necessary state and functions for other components to use. Custom hooks are a powerful tool that can greatly improve the maintainability and scalability of React applications.',
    },
  ];

  return (
    <section className="py-14">
      <div className="mx-auto max-w-screen-xl gap-12 px-4 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="font-semibold text-secondary">Important topics need to know for ReactJs</h3>
            <p className="mt-3 text-3xl font-extrabold text-gray-800 sm:text-4xl">
              Concepts to clear in web development
            </p>
          </div>
          <Pdf
            x={30}
            y={10}
            scale={1}
            targetRef={ref}
            filename="blog-question.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-center font-medium text-white shadow hover:bg-green-900 md:inline">
                <span>Download PDF</span>
                <AiOutlineFilePdf className="ml-2 inline-block text-xl"></AiOutlineFilePdf>
              </button>
            )}
          </Pdf>
        </div>
        <div
          ref={ref}
          className="mt-12 flex-1 md:mt-0">
          <ul className="space-y-4 divide-y">
            {questionList.map((item, idx) => (
              <li
                className="py-5"
                key={idx}>
                <summary className="flex items-center justify-between font-semibold text-gray-700">{item.q}</summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="mt-3 leading-relaxed text-gray-600"></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blog;
