import React from 'react'

import './style.scss'

const ProjectItem = ({
  alt,
  img,
  heading,
  type,
  client
}) => (
  <>
    <section className="project">
      <article className="project-item">
        <img
          src={img}
          alt={alt}
          className="project-img"
        />
      </article>
      <section className="project-info">
        <h1 className="project-heading">{heading}</h1>
        <article className="info">
          <span>
            {' '}
            <em className="bright-text">Project</em> {type}{' '}
          </span>
          <span>
            <em className="bright-text">Client</em> {client}
          </span>
        </article>
      </section>
    </section>
  </>
)

export default ProjectItem
