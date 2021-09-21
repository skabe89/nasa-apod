import React, {useState} from 'react'

export default function Pic({picture, likeOrUnlike}) {

  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like)
    likeOrUnlike(picture)
  }

  return (
    <div className='card'>
      { picture.url.split('.').includes('youtube') ? <iframe title={picture.title} src={picture.url} /> : <img src={picture.url} /> }
      <br />
      <h3>{picture.title}</h3>
      <h4>{picture.date}</h4>
      { !like ? <button onClick={handleLike}>Like</button> : <button onClick={handleLike}>Unlike</button> }
    </div>
  )
}
