import React, {useState, useEffect} from 'react'
require('dotenv').config()

export default function GetPics() {
  const [pics, setPics] = useState('')
  const key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetchPics()
  }, [])

  const fetchPics = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <h1>Nasa</h1>
    </div>
  )
}
