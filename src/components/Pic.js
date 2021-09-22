import React, {useState} from 'react'
import Modal from './Modal'

export default function Pic({picture, likeOrUnlike}) {

  const [like, setLike] = useState(false)
  const [show, setShow] = useState(false)

  const handleLike = () => {
    setLike(!like)
    likeOrUnlike(picture)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className='card'>
      { picture.url.split('.').includes('youtube') ? <iframe title={picture.title} src={picture.url} /> : <img src={picture.url} /> }
        {/* <h3>{picture.title}</h3>
         <h4>{picture.date}</h4> */}
        <button onClick={() => setShow(!show)}>Learn More</button>
        { !like ? <button onClick={handleLike}>Like</button> : <button onClick={handleLike}>Unlike</button> }
      <div className="overflow">
      </div>
        {show ? <Modal picture={picture} close={closeModal}/> : null}
    </div>
  )
}
