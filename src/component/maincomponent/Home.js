import React from 'react'
import About from '../About'
import Artical from '../Artical'

function Home() {
  return (
    <div>
        <Artical/>
        <h1 style={{textAlign:"center",fontFamily:"fantasy"}}>* About Us *</h1>
        <About/>
    </div>
  )
}

export default Home