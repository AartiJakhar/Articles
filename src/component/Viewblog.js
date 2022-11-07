import React  from "react";
import '../static/Viewblog.css'
function Viewblog(props) {
  const {note,getArticals}=props;
  return (
    
    <div>
      <div className="view">
      <p className="backArrow"  onClick={getArticals}>&larr;</p>
        <h1>{note.title}</h1>
        <div className="publishBox">
            <div className="publisher">
          <img src="https://images.unsplash.com/photo-1665107411141-a40f1ecea59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60" alt="BlogImage" />
          <p>{note.author}</p>

            </div>
          <p className="pubDate">Published: {note.date}</p>
        </div>
        <div className="mainBox">
        <p>
        {note.description}
        </p>
        <img src={note.ImageUrl} alt="img"/>
        <p>
       {note.content}  </p>
        <a href="/">Grow Your Business With HubSpot's Tools for WordPress Websites</a>
        <p>
        To help you get started with your forum framework, we’ve compiled a list of the 12 best WordPress forum themes and WordPress forum-compatible themes for you to choose from. Let’s go.
        </p>
        </div>
        <button className="viewbtn" onClick={getArticals}>back</button>
      </div>
    </div>
  );
}

export default Viewblog;
