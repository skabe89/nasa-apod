import React, {useState, useEffect} from 'react'
import Pic from './Pic'
require('dotenv').config()

export default function PicsContainer() {
  const key = process.env.REACT_APP_API_KEY

  const [pics, setPics] = useState('')
  const [liked, setLiked] = useState([])


  useEffect(() => {
    fetchPics()
  }, [])


  const fetchPics = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=tX8Q8vIy3LBn8ufmRkE6PWldNBz5tMizTkdv4Ceb&start_date=2021-09-01&end_date=2021-09-21`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPics(data)
    })
  }

  const likeOrUnlike = (picture) => {
    if(liked.includes(picture)){
      let index = liked.indexOf(picture)
      let arr = [...liked]
      arr.splice(index, 1)
      setLiked(arr)
    }
    else{
      setLiked([...liked, picture])
    }
  }


  const appendPics = () => {
    return pics.map((p, i) => <Pic key={p.date} picture={p} index={i} likeOrUnlike={likeOrUnlike}/> )
  }

  const listLiked = () => {
    let names = []
    liked.forEach(l => names.push(l.title))
    return names.join(", ")
  }

  return (
    <div>
      {typeof pics === 'string' ? <h1>LOADING...</h1> : null}
      <div className='container'>
        {typeof pics === 'object' ? appendPics() : <h1>{pics}</h1>}
      </div>
    </div>
  )
}
