import React, { useState } from 'react';
import projectsData from '../projects.json';
import { contentPageStyle } from '../styles';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleScroll = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

  return (
      <div id="projects" style={contentPageStyle}>
          <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.name}>
            <a href={project.repo} target="_blank" rel="noreferrer">
              {project.name}
            </a>
            <p>Tags: {project.tags.join(', ')}</p>
          </li>
        ))}
          </ul>
          <p>Interested in learning more about my work and projects?</p>
          <button onClick={() => handleScroll('about')}>About Me</button>
          <button onClick={() => handleScroll('contact')}>Contact Me</button>
    </div>
  );
};

export default ProjectsPage;
