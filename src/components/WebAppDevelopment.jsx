import React from "react";

const WebAppDevelopment = () => {
    return (
        <div className="bg-dark text-light p-5">
            <div className="container">
                <div className="row">
                    {/* Left Content Section */}
                    <div className="col-md-8">
                        <p className="fs-2 mb-4">Web App Development</p>
                        <p>
                            We are experts in developing cutting-edge Web App Development solutions
                            that meet the needs of businesses in today's digital world. We have a wide
                            range of experience in various technologies and platforms, which makes us
                            your ideal partner for bringing your digital ideas to life. Whether you need
                            a sleek new website, a powerful web app, or a user-friendly mobile app, our
                            team of skilled developers is dedicated to bringing your vision to life.
                        </p>
                        <p>
                            We are committed to excellence and ensuring that our Web and App Development
                            Services align seamlessly with your business objectives. We deliver results
                            that exceed expectations by working closely with you throughout the
                            development process.
                        </p>
                        {/* Highlights */}
                        <div className="container-fluid bg-dark text-light py-4">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5">
                                <div className="col">
                                    <div className="d-flex align-items-center bg-purple rounded">
                                        <i class="fa-regular fa-star text-success"></i>
                                        <div>Rated 4.6 Stars On Google</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-center bg-purple rounded gap-2">
                                        <i class="fa-regular fa-file-code text-bg-success"></i>                                        <div>35+ Projects Delivered</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                <div className="col">
                                    <div className="d-flex align-items-center bg-purple rounded gap-2">
                                        <i class="fa-brands fa-google-scholar text-success"></i>
                                        <div>Highly Experienced Professionals</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-center bg-purple rounded gap-3">
                                        <i class="fa-solid fa-user"></i>
                                        <div>Your Partner For Growth</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="d-flex mt-4">
                            <button className="btn btn-warning me-2">Services we offer</button>
                            <button className="btn btn-outline-light">Our Projects</button>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className="col-md-4">
                        <div className="bg-light text-dark p-4 rounded">
                            <p className="fs-3">Get In Touch</p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Please enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone No.</label>
                                    <input type="text" className="form-control" id="phone" placeholder="Phone No." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="query" className="form-label">Query</label>
                                    <textarea className="form-control" id="query" rows="3" placeholder="Enter your query"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WebAppDevelopment;
