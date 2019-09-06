import React from 'react'
import './style.scss'
const ErrorMessage = ({ message }) => (
  <article id="card">
    <div className="card__description">
      <div className="icon fa fa-flask card__descriptionIcon"></div>
      <div className="card__descriptionText">Science Potion</div>
    </div>
    <div className="card__price">{message}</div>
  </article>
)

export default ErrorMessage
