import React from 'react';

const OurProject = () => {
  const projects = [
    {
      image: 'https://img.freepik.com/free-photo/person-working-html-computer_23-2150040432.jpg', // Replace with actual image URL
      alt: 'Project 1',
    },
    {
      image: 'https://img.freepik.com/free-photo/close-up-hands-typing-laptop-with-blank-screen_23-2147804843.jpg', // Replace with actual image URL
      alt: 'Project 2',
    },
    {
      image: 'https://img.freepik.com/free-photo/laptop-notebook-with-stationery-desk_23-2148407047.jpg', // Replace with actual image URL
      alt: 'Project 3',
    },
    {
      image: 'https://img.freepik.com/free-photo/computer-laptop-with-blank-screen-white-desk_23-2147826254.jpg', // Replace with actual image URL
      alt: 'Project 4',
    },
  ];

  return (
    <div className="container py-5" style={{ backgroundColor: '#f5f7fb' }}>
      <p className="fs-2 text-center mb-4" style={{ color: '#4b006e' }}>Our Projects</p>
      <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="d-flex justify-content-center">
                <img
                  src={project.image}
                  className="d-block img-fluid"
                  alt={project.alt}
                  style={{
                    width: '500px',
                    height: '400px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default OurProject;
