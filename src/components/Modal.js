import React from 'react'

export default function Modal({picture, close}) {
  

  return (
    <div className='modal-bg' onClick={close}>
      <div className="modal">
      { picture.url.split('.').includes('youtube') ? <iframe title={picture.title} src={picture.url} /> : <img src={picture.url} /> }
      <div className='overflow'>
      <h1>{picture.title}</h1>
      <p>{picture.date}</p>
      <p>{picture.explanation}</p>
      </div>
      </div>
    </div>
  )
}
