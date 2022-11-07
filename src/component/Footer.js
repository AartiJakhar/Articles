import React from 'react'
import '../static/Footer.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
function Footer() {
  return (


    <div>
    <div className='footer '>
        <ul className=' my-3 justify-content-center ' style={{display:'flex'}}>
            <li><Link to='/about' className=' px-3' >About</Link></li>
            
            <li><a href='/' className=' px-3' >Contact</a></li>
            <li><a href='/' className=' px-3' >Policy</a></li>
            <li><a href='/' className=' px-3' >Terms & Conditions</a></li>
        </ul>
    </div>
    
    <div className='flex justify-content-center my-3' style={{display:'flex'}} >
       <a  target='_blank'  rel="noreferrer" href='https://www.facebook.com/'><i className="fa-brands fa-twitter"></i></a>
       <a  target='_blank'  rel="noreferrer" href='https://www.instagram.com/'><i className="fa-brands fa-facebook"></i></a>
       <a  target='_blank'  rel="noreferrer" href='https://www.twitter.com/'><i className="fa-brands fa-instagram "></i></a>
    </div>
    <div >
        <pre className='text-center fs-5'>
        Copyright © 2022 B L O G V L O G 
        </pre>
    </div>
    </div>
  )
}

export default Footer
