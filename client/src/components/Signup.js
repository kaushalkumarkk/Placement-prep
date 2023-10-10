import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import signup from '../../src/images/register.webp';

const Signup = () => {
  const history =useHistory();
  const [user, setUser] =useState({
    name:"" ,email:"" ,phone:"" ,password:"" ,Cpassword:""
  });

  let name, value;
  const handleInputs =(e) =>{
    console.log(e);
    name = e.target.name;
    value =e.target.value;

    setUser({...user, [name]:value});

  }


const PostData = async (e) => {
  e.preventDefault();

  const { name, email ,phone ,password ,Cpassword} = user;

  const res =await fetch("/register" , {
    method:"POST",
    headers :{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({
      name, email ,phone ,password ,Cpassword
    })
  });

  const data = await res.json();
  if(res.status === 422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");

  }else{
    window.alert("Registration Successfull");
    console.log("Registration Successfull");

    history.push("/Login");
  }


}


  return (
   <>
   <section>
    <div className='container mt-5'>
   
      <div className='signup-form'>
        <h2>Signup</h2>
        <div className='row'>
        <div className='col-md-6'>
          <form method="POST">
          <div className='form-group mt-3'>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-person"></i></span>
          <input type="text" className="form-control" name="name"
          value={user.name}
          onChange={handleInputs}
          placeholder="Your Name" aria-label="name" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope-at-fill"></i></span>
          <input type="email" className="form-control" name="email"
          value={user.email}
          onChange={handleInputs}
          placeholder="Your Email" aria-label="email" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-telephone-fill"></i></span>
          <input type="phone" className="form-control" name="phone"
          value={user.phone}
          onChange={handleInputs}
          placeholder="Mobile Number" aria-label="phoneno" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill"></i></span>
          <input type="password" className="form-control" name='password'
          value={user.password}
          onChange={handleInputs}
          placeholder="Password" aria-label="password" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i className="bi bi-lock-fill"></i></span>
          <input type="password" className="form-control" name="Cpassword"
          value={user.Cpassword}
          onChange={handleInputs}
          placeholder="Confirm Your Password" aria-label="Cpassword" aria-describedby="basic-addon1"/>
        </div>

        <div className='form-button'>
        <button className="btn btn-primary" name='signup' id='signup' type="submit" onClick={PostData}>Register</button>
        </div>

        </div>
        </form>
        
       
        </div>
        <div className='col-md-6'>
          <figure>
            <img src={signup} alt='registration pic'></img>
            <p><a className="link-offset-2 link-underline link-underline-opacity-0" href="/Login">I am already Login</a></p>
          </figure>
        </div>
        
      </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default Signup