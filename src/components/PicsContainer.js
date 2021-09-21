import React, {useState, useEffect} from 'react'
import Pic from './Pic'
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

  const appendPics = () => {
    return pics.map(p => <Pic key={p.date} picture={p}/>)
  }

  return (
    <div>
      {fetched ? null : <button onClick={() => fetchPics()}>Fetch Pics</button>}
      {typeof pics === 'object' ? appendPics() : <h1>{pics}</h1>}
    </div>
  )
}
