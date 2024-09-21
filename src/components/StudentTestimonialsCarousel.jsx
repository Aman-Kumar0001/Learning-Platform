import React, { useEffect } from 'react';

const studentData = [
  { name: "Harsh", course: "Data Analytics Course", company: "GlobalLogic", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
  { name: "Abhishek Pal", course: "Data Analytics Course", company: "concentrix", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
  { name: "Kshitij", course: "Data Analytics Course", company: "GlobalLogic", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
  { name: "Shashank", course: "Data Analytics Course", company: "GlobalLogic", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
  { name: "Saloni Shriwastav", course: "Data Analytics Course", company: "IT Solutions PVT LTD", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
  { name: "Purnima Monga", course: "Data Analytics Course", company: "SAGE", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
  { name: "Gaurav", course: "Data Analytics Course", company: "", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
  { name: "Sunil", course: "Data Analytics Course", company: "Air Canada", img: "https://img.freepik.com/free-psd/3d-rendering-teenager-boy-isolated-white-background-with-clipping-path_1142-54091.jpg?t=st=1726292755~exp=1726296355~hmac=72d9861dc62dc91fe17d7adaa38f8c9c9ceee5c586767e4ae2b09416b5cba9ee&w=740" },
];

const StudentCard = ({ name, course, company, img }) => (
  <div className="card m-2 card-sec2" style={{width: '220px'}}>
    <div className="card-body">
      <div className="d-flex align-items-center mb-2">
        <img src={img} alt="" style={{width: '50px', height: '50px'}}/>
        <div>
          <p className="fs-5 card-title mb-0">{name}</p>
          <p className="card-text small mb-0">{course}</p>
        </div>
      </div>
      <p className="card-text small">{company}</p>
    </div>
    <div className="position-absolute top-0 end-0 m-2">
      <span className="badge bg-warning text-dark">Recent</span>
    </div>
  </div>
);

const StudentTestimonialsCarousel = () => {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carousel = new window.bootstrap.Carousel(document.getElementById('studentCarousel'), {
      interval: 5000,
      wrap: true
    });

    // Clean up function to dispose of the carousel when the component unmounts
    return () => {
      carousel.dispose();
    };
  }, []);

  const chunkSize = 4;
  const chunkedData = [];
  for (let i = 0; i < studentData.length; i += chunkSize) {
    chunkedData.push(studentData.slice(i, i + chunkSize));
  }

  return (
    <div className="container-fluid bg-light py-5">
      <div id="studentCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedData.map((chunk, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="d-flex justify-content-center">
                {chunk.map((student, idx) => (
                  <StudentCard key={idx} {...student} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#studentCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#studentCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary">View More</button>
      </div>
    </div>
  );
};

export default StudentTestimonialsCarousel;