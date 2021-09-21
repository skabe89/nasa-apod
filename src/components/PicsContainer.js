import React, {useState, useEffect} from 'react'
import Pic from './Pic'
import Vid from './Vid'
require('dotenv').config()

export default function PicsContainer() {
  const key = process.env.REACT_APP_API_KEY

  const [pics, setPics] = useState('Loading...')
  const [fetched, setFetched] = useState(false)
  const [liked, setLiked] = useState([])

  // useEffect(() => {
  //   fetchPics()
  // }, [])


  const fetchPics = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=2021-09-01&end_date=2021-09-21`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPics(data)
    })
  }

  const likePic = (picture) => {
    if(liked.includes(picture)){
      let index = liked.indexOf(picture)
      let arr = [...liked]
      arr.splice(index, 1)
      setLiked(arr)
      console.log(`Unliked ${picture.title}`)

    }
    else{
      setLiked([...liked, picture])
      console.log(`Liked ${picture.title}`)
    }
  }

  const appendPics = () => {
    return pics.map((p, i) => <Pic key={p.date} picture={p} index={i} likePic={likePic}/> )
  }

  const listLiked = () => {
    let names = []
    liked.forEach(l => names.push(l.title))
    return names.join(", ")
  }

  return (
    <div>
      <h3>{listLiked()}</h3>
      {fetched ? null : <button onClick={() => fetchPics()}>Fetch Pics</button>}
      {typeof pics === 'object' ? appendPics() : <h1>{pics}</h1>}
    </div>
  )
}
