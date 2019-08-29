import React from 'react'

import './style.scss'

// populate projects with API call for data
// import { projects } from './data'
import Request from '../../services/api/provider/Request'
// change this for network call
import ProjectItem from './project-item'

const config = {
  method: 'get',
  pathname: '/projects'
}

const Projects = () => (
  <Request call={config}>
    {response => {
      if (response instanceof Error) {
        return <div>{response.message}</div>
      }

      if (!response) {
        return <div>loading ...</div>
      }

      const projects = response.data

      return (
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
    }}
  </Request>
)

export default Projects
