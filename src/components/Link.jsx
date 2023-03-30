import React from 'react'

const Link = ({link}) => {
  return (
    <div>
        <span>{link.description} ({link.url})</span>
    </div>
  )
}

export default Link