import React from 'react'

const Section1 = () => {
    function close() {
        let a = document.getElementById('form');
        if (a) {
            if (window.getComputedStyle(a).display === 'block') {
                a.style.visibility = "hidden";
            }
        }
    }
    
    
  return (
    <>
     <div className="container-fluid sec1" style={{color: 'white' }}>
      <div className="row row-cols-1 row-cols-lg-2 justify-content-around align-items-center">
        {/* Left Section */}
        <div className="col text-center py-5">
          <p className='fs-1'>Your Pathway To IT Excellence Begins Here!</p>
          <p>Our Industry Association</p>
          <div className="d-flex flex-wrap justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" alt="Google" className="img-fluid mx-3" style={{ height: '40px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" alt="Adobe" className="img-fluid mx-3" style={{ height: '40px' }} />
            <img src="https://pngimg.com/uploads/microsoft/microsoft_PNG10.png" alt="Microsoft" className="img-fluid mx-3" style={{ height: '40px' }} />
          </div>
        </div>

        {/* Right Section (Form) */}
        <div id='form' className="col shadow-lg p-3 mb-5 bg-body rounded sec1-form bg-white text-dark p-3 rounded">
          <p className='fs-3'>Get In Touch</p>
          <i onClick={close} className="fa-regular fa-circle-xmark fs-4 bg-body-secondary rounded position-absolute" style={{right:"10px",top:"20px",cursor:"pointer"}}></i>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Please Enter Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Please Enter Your Email Address" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Please Enter Your Phone Number" />
            </div>
            <div className="mb-3">
              <label htmlFor="query" className="form-label">I Am Looking For</label>
              <input type="text" className="form-control" id="query" placeholder="I Am Looking For.." />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default Section1