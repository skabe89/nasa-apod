import React from 'react'

export default function Modal({picture, close}) {
  

  return (
    <div className='modal-bg'>
      <div className="modal">
      <h1>{picture.title}</h1>
      <p>{picture.date}</p>
      { picture.url.split('.').includes('youtube') ? <iframe title={picture.title} src={picture.url} /> : <img src={picture.url} /> }
      <button onClick={close}>Close</button>
      </div>
    </div>
  )
}
