import React, {useState} from 'react'

export default function Vid( {video} ) {
  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like)
  }
  return (
    <div>
      {console.log(video)}
       <h3>{video.title}</h3>
      <h4>{video.date}</h4>
      <iframe title={video.title} src={video.url} />
      <br />
      { !like ? <button onClick={handleLike}>Like</button> : <button onClick={handleLike}>Unlike</button> }
    </div>
  )
}
