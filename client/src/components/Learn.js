import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import java from '../../src/images/java.jpeg';
import python from '../../src/images/python1.png';
import C from '../images/c.png'
import CPP from '../images/CPP.avif'
import html from '../images/html.png'
import css from '../images/css.jpg'
import js from '../images/js.jpg'
import Reactjs from '../images/Reactjs.jpg';
import nodejs from '../images/node.png';
import mongo from '../images/mongo.png';
import mysql from '../images/msql.png';
import php from '../images/php1.png';



const Learn = () => {
  return (
    <div className='container mt-4'>
      <h1 className='text-center mt-3 mb-4 learn-heading'>Programming Language</h1>
      <div className='row'>
        <div className='col-md-3'>
      <div className="card">
        <img src={java} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">Java With DSA</h5>
          <p className="card-text">Java is a versatile, object-oriented programming language known for its platform independence. It uses a write once, run anywhere approach, making it suitable for a wide range of applications, from web development to mobile apps and more.</p>
          <a href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=6lI24JhZ5hFrVff7" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3'>
      <div className="card">
        <img src={CPP} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">C++ With DSA</h5>
          <p className="card-text">C++ is a versatile, high-level programming language that combines both procedural and object-oriented programming paradigms. It offers a powerful set of features, including strong type-checking, memory management .</p>
          <a href="https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=u9ryt0BqhzdLNaIO" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3'>
      <div className="card">
        <img src={python} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">Python</h5>
          <p className="card-text">Python is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes code readability and is widely used for web development, data analysis, artificial intelligence, and more. </p>
          <a href="https://youtu.be/XnSasPR2KJI?si=D_oJICdKHkeZGdCk" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3'>
      <div className="card">
        <img src={C} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">C</h5>
          <p className="card-text">C is a versatile and widely used programming language known for its low-level system programming capabilities. It provides a rich set of features for efficient memory management and precise control over hardware resources.</p>
          <a href="https://youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt&si=NINh3pRoPe7n2CrZ" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        
        
        <h1 className='text-center mt-4 learn-heading'>Web Development</h1>
        <h2 className='learn-heading mt-3 mb-4'>Fronted</h2>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={html} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">HTML</h5>
          <p className="card-text">HTML (Hypertext Markup Language) is a standard language used for creating and structuring web pages on the internet. It consists of tags and elements that define the content and layout of a webpage, including text,  images,  links,  and  multimedia.</p>
          <a href="https://youtu.be/k7ELO356Npo?si=V5x0hC2iQwXdcY1r" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={css} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">CSS</h5>
          <p className="card-text">CSS(Cascading Style Sheets),is a stylesheet language used in web development to define the visual presentation and layout of HTML elements. It enables web designers and developers to control</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={js} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">JAVASCRIPT</h5>
          <p className="card-text">JavaScript is a versatile programming language used for web development. It enables interactive and dynamic elements on websites, handling tasks like form validation, animations, and interactivity.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={Reactjs} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">REACTJS</h5>
          <p className="card-text">ReactJS is a popular JavaScript library for building user interfaces.It allows developers to create interactive and dynamic web applications by efficiently managing the DOM and component-based architecture.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <h1 className='learn-heading mt-4 mb-4'>Backend</h1>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={nodejs} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">NODEJS + EXPRESSJS</h5>
          <p className="card-text">Node.js is a runtime environment that allows you to run JavaScript on the server-side.<br></br>Express.js is a minimal and flexible web application framework for Node.js.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={mongo} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">MONGODB</h5>
          <p className="card-text">MongoDB is a popular NoSQL database management system that stores data in a flexible, JSON-like format called BSON. It is known for its scalability, high performance, and ease of use, making it suitable for a wide range of applications. </p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={mysql} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">MYSQL</h5>
          <p className="card-text">MySQL is an open-source relational database management system (RDBMS) widely used for storing, managing, and retrieving structured data. It employs SQL to interact with databases, making it a popular choice for web applications.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src={php} className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">PHP</h5>
          <p className="card-text">PHP (Hypertext Preprocessor) is a widely-used open-source scripting language for web development. It is embedded within HTML code to create dynamic web pages and can interact with databases to process and display information.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>

        <h1 className='text-center mt-4 learn-heading'>App Development</h1>


        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">KOTLIN</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">This is a sample card with some content.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
        <div className='col-md-3 mt-4'>
      <div className="card">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Sample" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">This is a sample card with some content.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
        </div>
      </div>
    </div>
   
  );
}

export default Learn;
