import React from 'react'
import axios from 'axios'
import getData from './components/getData'


const App = () => {

  
  
  ( async () => {
  const About = await getData(1,2)
    console.log(About)
    
    })()
    
  return ( 
  <div>
  </div>
  )
}

export default App