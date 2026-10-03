import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);
  // useEffect(()=>{
  //   axios.get('/api/jokes')
  //   .then((response)=>{
  //     setJokes(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log('error found')
  //   })
  // },[])
  useEffect(() => {
  axios.get('/api/jokes')
    .then((response) => {
      console.log("DATA:", response.data)
      console.log("IS ARRAY:", Array.isArray(response.data))
      setJokes(response.data)
    })
    .catch((error) => {
      console.log("ERROR:", error)
    })
}, [])
  return (
    <>
      <h1>this is my jokessssss </h1>
      <p>jokes: {jokes.length}</p>
      {
        jokes.map((joke, index) =>(
          <div key = {joke.id} >
            <h3> {joke.title}</h3>
            <h3> {joke.content}</h3>
          </div>
        ))
      }

    </>
  )
}

export default App
