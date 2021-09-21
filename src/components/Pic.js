import React, {useState} from 'react'

export default function Pic({picture}) {
  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <div>
      <h3>{picture.title}</h3>
      <h4>{picture.date}</h4>
      <img src={picture.url} />
      <br />
      { !like ? <button onClick={handleLike}>Like</button> : <button onClick={handleLike}>Unlike</button> }
    </div>
  )
}
