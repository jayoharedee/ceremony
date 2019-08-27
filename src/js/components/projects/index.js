import React from 'react'

import './style.scss'

// populate projects with API call for data
import { projects } from './data'

import ProjectItem from './project-item'

// barrel role and map images to create new sections
// import AppraisalCard from './img/Appraisal Card Mockup.png'

const Projects = () => (
  <main id="projects" role="main">
    {projects.map(project => (
      <ProjectItem
        key={project.id}
        alt={project.img.alt}
        img={project.img.src}
        heading={project.heading}
        type={project.type}
        client={project.client}
      />
    ))}
  </main>
)

export default Projects
