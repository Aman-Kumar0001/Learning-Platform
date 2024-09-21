import React, { useState, useEffect } from 'react';

const Alert = () => {
  const [form, setForm] = useState({ name: '', phone: '', query: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Handle form submission here
  };

  const handleClose = () => {
    setShowForm(false);
  };

  if (!showForm) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="card" style={{maxWidth: '400px'}}>
        <div className="card-body">
          <button type="button" className="btn-close position-absolute top-0 end-0 m-2" onClick={handleClose} aria-label="Close"></button>
          <p className="fs-4 card-title text-center mb-2">
            <span className="text-success fw-bold">GET UPTO 15% OFF</span> on your<br />First course
          </p>
          <p className="fs-5 text-center mb-4">Enroll Now</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name*</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Please enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone No*</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone No."
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="query" className="form-label">Query</label>
              <textarea
                className="form-control"
                id="query"
                name="query"
                placeholder="Enter your query"
                value={form.query}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Alert;