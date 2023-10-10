import React from 'react'
// import phone from '../../src/images/phone.jpg';


const Contact = () => {
  return (
   <>
   <div className='contact_info'>
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
        <div className='d-flex justify-content-start align-iteams-center'>
        <i className="bi bi-phone-fill"></i>
        <div>
          phone
        </div>
        <div>
          +91 9102257101
        </div>
        </div>
      </div>
    </div>
    </div>
   </div>
   {/* Get in touch  */}

   <div className='contact-form'>
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-6'>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className='contact-button'>
        <button className="btn btn-primary" name='Login' id='Login' type="submit">Submit</button>
        </div>

      </div>
      
      </div>
    </div>
   </div>
   </>
  )
}

export default Contact