import React, { useState } from 'react';
import projectsData from '../projects.json';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Projects</h1>
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
    </div>
  );
};

export default ProjectsPage;
