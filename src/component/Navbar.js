import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../static/Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const mypro = [];
  const [article, setarticle] = useState(mypro);
  const navSlide = () => {
    const navburger = document.querySelector(".nav");
    navburger.classList.toggle("toggle");
  };
  const myprofile= async()=>{
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "GET",
  
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setarticle(json);
  }
  const handlepro = async (e) => {
    // api call
    e.preventDefault();
    ///button toggle
    const pro = document.querySelector(".pro");
    pro.classList.toggle("protoggle");
    if (localStorage.getItem('token')) {
      myprofile()
      setloading(true);
       
    } else {
      setloading(false);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="nav fixed-top">
        <div>
          <Link to="/" className="navlogo">
            BLOG-VLOG
          </Link>
        </div>
        <div className="navrow">
          <nav>
            <ul className="d-flex">
              <li>
                <Link to="/artical">artical</Link>
                <Link to="/about">About</Link>
                <Link to="/">ContactUs</Link>

                <Link to="/signpro" onClick={handlepro} className="profile">
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navburgur" onClick={navSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      {localStorage.getItem("token") ? (
        <div className="pro">
      <h1 className="profile">😊</h1>
          <h3>Hi there, {article.name}!</h3>
          <h3 className="my-3"> {article.email}!</h3>
          <Link  onClick={handleLogout}>
            SignOut
          </Link>
        </div>
      ) : (
        <div className="pro" style={{display:"flex",flexDirection:'column'}}>
            <Link to="/signUp" className="mx-3">SignUp</Link>
            <Link to="/signIN">SignIn</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
