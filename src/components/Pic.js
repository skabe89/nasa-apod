import React from 'react'

export default function Pic({picture}) {
  return (
    <div>
      <img src={picture.url} />
      <h2>{picture.date}</h2>
    </div>
  )
}
