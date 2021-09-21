import React, {useState} from 'react'

export default function Pic({picture, index, likePic}) {
  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like)
    likePic(picture)
  }

  return (
    <div>
      <h3>{picture.title}</h3>
      <h4>{picture.date}</h4>
      { picture.url.split('.').includes('youtube') ? <iframe title={picture.title} src={picture.url} /> : <img src={picture.url} /> }
      <br />
      { !like ? <button onClick={handleLike}>Like</button> : <button onClick={handleLike}>Unlike</button> }
    </div>
  )
}
