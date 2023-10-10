import React , {useState} from 'react'
import login from '../../src/images/login.jpeg';
import { useHistory } from 'react-router-dom';


const Login = () => {
  const history = useHistory();

  const[email , setEmail] =useState('');
  const[password , setPassword] =useState('');

  const loginUser =async (e) => {
    e.preventDefault();
   const res =await fetch('/signin' , {
    method :"POST" ,
    headers : {
      "Content-Type" :"application/json"
    },
    body:JSON.stringify({
      email,
      password

    })
   });
   const data = res.json();
   if(res.status === 400 || !data){
    window.alert("Invalid Registration");
  }else{
    window.alert("Registration Successfull");
    history.push("/")
    
  }
  }


  return (
    <div className="container mt-5">
        <div className='signin-content'>
      <div className="row justify-content-center">
      <div className='col-md-6'>
          <figure>
            <img src={login} alt='registration pic'></img>
            <p><a className="link-offset-2 link-underline link-underline-opacity-0" href="/Signup">Create an account</a></p>
          </figure>
        </div>
        <div className="col-md-6">
          <h2>SignIn</h2>
          <form method='POST'>
        <div  className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope-at-fill"></i></span>
          <input type="email" className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email" aria-label="email" aria-describedby="basic-addon1"/>

        </div>
        

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill"></i></span>
          <input type="password" className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" aria-label="password" aria-describedby="basic-addon1"/>

        </div>

        <div className='form-button'>
        <button className="btn btn-primary" name='Login' id='Login' type="submit" onClick={loginUser}>LogIn</button>
        </div>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
  }

export default Login