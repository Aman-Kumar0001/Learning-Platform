import React, { useState } from 'react';

const TechnologyTraining = () => {
  const [activeTab, setActiveTab] = useState('FrontEnd');

  const technologies = {
    FrontEnd: [
      { name: 'HTML5', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
      { name: 'JavaScript', image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
      { name: 'React', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s' },
      { name: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' },
    ],
    BackEnd: [
      { name: 'NodeJS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s' },
      { name: 'Python', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z0LC70CF3lPE1Xe-Uka4Y5sSlLzrAVHCQg&s' },
    ],
    Mobile: [
      { name: 'Flutter', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-TVphB148wg1omRxgqXTMk9lDbLyunCmdw&s' },
      { name: 'React Native', image: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
    ],
    OpenSource: [
      { name: 'WordPress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s' },
      { name: 'Shopify', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4SDcdI-DZNvD6e55FBmtyWr2abAdC03hXA&s' },
    ],
    Devops: [
      { name: 'AWS', image: 'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg' },
      { name: 'Docker', image: 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png' },
      { name: 'Kubernetes', image: 'https://1000logos.net/wp-content/uploads/2022/07/Kubernetes-Logo.png' },
    ],
    Database: [
      { name: 'MySQL', image: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png' },
      { name: 'MongoDB', image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png' },
    ],
  };

  return (
    <div className="container py-5">
      <p className="fs-2 text-center mb-4" style={{ color: '#4b006e' }}>Our Technology Training</p>
      
      {/* Tabs */}
      <ul className="nav nav-pills justify-content-center mb-3 techno-btn" id="technology-tabs" role="tablist">
        {Object.keys(technologies).map((category) => (
          <li className="nav-item" key={category}>
            <button
              className={`${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {Object.keys(technologies).map((category) => (
          <div
            className={`tab-pane fade ${activeTab === category ? 'show active' : ''}`}
            id={category}
            key={category}
          >
            <div className="row justify-content-center">
              {technologies[category].map((tech, index) => (
                <div className="col-3 col-md-2 text-center mb-3" key={index}>
                  <img src={tech.image} alt={tech.name} className="img-fluid" style={{ width: '50px', height: '50px' }} />
                  <p className="mt-2">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyTraining;
