import React, {useState} from 'react'
import Modal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'


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
       
       <div className="info">
        <FontAwesomeIcon icon={faInfoCircle} size='2x' onClick={() => setShow(!show)} />
        { !like ? <FontAwesomeIcon icon={faHeart} size='2x' color='red' onClick={handleLike}/> :  <FontAwesomeIcon icon={solidHeart} size='2x' color='red' onClick={handleLike}/>}
       </div> 

      <div>
      </div>
        {show ? <Modal picture={picture} close={closeModal}/> : null}
    </div>
  )
}
