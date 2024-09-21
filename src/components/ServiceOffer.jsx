import React, { useState } from 'react';

const services = [
    { 
      img: "https://img.freepik.com/free-photo/person-working-html-computer_23-2150040432.jpg?t=st=1726487387~exp=1726490987~hmac=b06f12880d4ec822efdfdc713fc10a6ce1612f97ca2f5c06e9023c57f02fbdd3&w=900", 
      title: "Website Development", 
      content: "We are experts in Website Development, creating unique and out-of-the-box website designs that enhance businesses. We take time to understand your business and goals, and then we create a visually appealing and functional website." 
    },
    { 
      img: "https://img.freepik.com/free-photo/online-shopping-concept_23-2148510437.jpg?w=900", 
      title: "E-Commerce Solutions", 
      content: "Our E-Commerce solutions are tailored to help your business thrive in the digital marketplace, providing a seamless shopping experience for your customers." 
    },
    { 
      img: "https://img.freepik.com/free-photo/web-designer-with-laptop-paintboard_23-2148720511.jpg?w=900", 
      title: "Responsive Website Development", 
      content: "We create responsive websites that look great on any device, ensuring your site is accessible to users on all platforms." 
    },
    { 
      img: "https://img.freepik.com/free-photo/credit-cards-payment-terminal_23-2148046307.jpg?w=900", 
      title: "Payment Gateway Integration", 
      content: "We offer secure and efficient payment gateway integrations to ensure smooth transactions for your business." 
    },
    { 
      img: "https://img.freepik.com/free-photo/cms-content-management-system_23-2148720512.jpg?w=900", 
      title: "CMS Development", 
      content: "Our CMS development services provide you with a powerful tool to manage and update your website content easily and efficiently." 
    },
    { 
      img: "https://img.freepik.com/free-photo/web-programming-coding_23-2148866164.jpg?w=900", 
      title: "Web Development", 
      content: "Our web development services cover all aspects of website creation, from design to deployment, ensuring a high-performing site." 
    },
    { 
      img: "https://img.freepik.com/free-photo/internet-security-concept_23-2148167331.jpg?w=900", 
      title: "Webhosting", 
      content: "We provide reliable and scalable web hosting services to keep your website up and running smoothly at all times." 
    },
    { 
      img: "https://img.freepik.com/free-photo/maintaining-security-software-computer_23-2148716553.jpg?w=900", 
      title: "Website Maintenance", 
      content: "We offer ongoing website maintenance services to ensure your site is secure, updated, and running optimally." 
    },
    { 
      img: "https://img.freepik.com/free-photo/graphic-designers-brainstorming-design-website-template_23-2148787323.jpg?w=900", 
      title: "Website Redesigning", 
      content: "Give your site a fresh, modern look with our website redesigning services, improving both functionality and aesthetics." 
    },
];

const ServiceOffer = () => {
    const [selectedService, setSelectedService] = useState(services[0]);

    const handleServiceChange = (service) => {
        setSelectedService(service);
    };

    return (
        <section className="services-section bg-dark text-light py-5">
            <div className="container text-center">
                <p className="fs-2 mb-4">Services We Offer</p>
                <div className="d-flex flex-wrap justify-content-center mb-4">
                    {services.map((service, index) => (
                        <button
                            key={index}
                            className="service-btn m-2"
                            onClick={() => handleServiceChange(service)}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img
                            src={selectedService.img}
                            alt={selectedService.title}
                            className="rounded-circle" height="300px"
                        />
                    </div>
                    <div className="col-md-6">
                        <p className="fs-3">{selectedService.title}</p>
                        <p>{selectedService.content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOffer;
