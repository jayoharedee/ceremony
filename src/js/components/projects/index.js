import React from 'react'

import './style.scss'

import Request from '../../services/api/provider/Request'
import CircleSpinner from '../spinners/circle'
import ErrorMessage from '../errormessage'
import ProjectItem from './project-item'

// export to seperate file
const config = {
  method: 'get',
  pathname: '/projects'
}

const Projects = () => (
  <Request call={config}>
    {response => {
      if (!response) {
        return <CircleSpinner />
      }

      const { message, data } = response

      if (response instanceof Error) {
        return <ErrorMessage message={message} />
      }

      const projects = data

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
