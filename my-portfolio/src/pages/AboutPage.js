import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about-section">
        <img src="/path/to/your/professional-photo.jpg" alt="Michael J. Gould" className="profile-photo" />
        <div className="about-text">
          <p>
            Versatile software engineer with a diverse background in web development, application support, and software design. Strong focus on client needs, with demonstrated experience in coordinating with cross-functional teams to deliver high-quality, scalable solutions. Skilled in troubleshooting and resolving technical issues, as well as designing, authoring, and maintaining software systems. Committed to personal and professional growth, with recent experience in C#(.NET), React, and C++, alongside a dedicated pursuit of personal hobbies and fitness goals. Proficient in a wide range of software development methodologies and techniques, with a talent for learning new information, procedures, and technologies quickly.
          </p>
          <p>
            <strong>Contact:</strong> mjgould06@gmail.com • (847) 220-3330
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/michael-j-gould-24-chicago/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/michael-j-gould-24-chicago/</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/mgould6/mgould6" target="_blank" rel="noopener noreferrer">https://github.com/mgould6/mgould6</a>
          </p>
          <p>
            <strong>Location:</strong> Chicago, IL
          </p>
        </div>
      </div>
      {/* Add more sections for education, experience, and certifications here */}
    </div>
  );
};

export default AboutPage;
