import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import './homepage.scss'

const HomePage = () => {

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
},[])

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main>
        <h1>home</h1>
      </main>
    </>
  )
}

export default HomePage
