import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import NoteContext from '../Context/NoteContext'
import "../static/Card.css"

function Card(props) {
    const {note}=props;
    // console.log(note.title)

    const context=useContext(NoteContext)
    const {fechmyarti}=context;

  return (
    <>
{  note._id!=="404"?  <div className='card' onClick={()=>{fechmyarti(note._id)}}>
        <div>
            <img src={note.ImageUrl} alt='img'/>
        </div>
        <div>
         <div>
             <h5>{note.tag}</h5>
            <h4>{note.title} </h4>
         </div>
    <button className=' mx-2 cardbtn' >Read More</button>
         
        </div>
     </div>:
    <div className='notFound'>
      <h1>*{note.title}*</h1>
     <img className='notFoundImg' src={note.ImageUrl} alt="Not Found" />
 </div>
     }
    </>
  )
}

export default Card
