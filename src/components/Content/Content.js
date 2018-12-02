import React from 'react'
import './Content.css'

const Content = (props) => {
  return (
    <div className="content">
      <h3 className="label">
        {props.label}
      </h3>
      <div className="body">
        {props.children}
      </div>
    </div>
  )
}

export default Content