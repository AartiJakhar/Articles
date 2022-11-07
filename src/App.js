import React from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import NoteState from "./Context/NoteState";
import Artical from "./component/Artical";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import AddArtical from "./component/AddArtical";
import Footer from "./component/Footer";
import Search from "./Onclick/Search";
import Sign from "./Onclick/Sign";
import Signin from "./Onclick/Signin";
import Home from "./component/maincomponent/Home";
export default function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artical" element={<Artical />} />
          <Route path="/about" element={<About />} />
          <Route path="addartical" element={<AddArtical />} />
          <Route path="/signUp" element={<Sign />} />
          <Route path="/signIn" element={<Signin />} />
        </Routes>

        <Footer />
      </Router>
    </NoteState>
  );
}
