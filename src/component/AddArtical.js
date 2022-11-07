import React, { useContext, useState } from 'react'
import NoteContext from '../Context/NoteContext'
// import Artical from './Artical';

function AddArtical() {
    const context=useContext(NoteContext)
    const {addArtical}=context;
    const [article,setarticle]=useState({title:"",description:"",ImageUrl:""})
    const handleClick=(e)=>{
        e.preventDefault()
        addArtical(article.title,article.description,article.ImageUrl);
    }
    const onChange=(e)=>{
      setarticle({...article,[e.target.name]: e.target.value})
    }
  return (
    <div style={{marginTop:'6rem'}}>
      <h1>Add a Note</h1>
      <form>
        <div className="form-group my-3">
          <label htmlFor="title">title</label>
          <input
            type="text"
            className="form-control my-2"
            id="title"
            name='title'
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="Imageurl">ImageUrl </label>
          <input 
             type="text"
            className="form-control my-2"
            id="Imageurl"
            name='ImageUrl'
            aria-describedby="emailHelp"
            placeholder="Enter Imageurl"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="description" >Description</label>
          <input
            type="description"
            className="form-control my-2"
            id="description"
            placeholder="description"
            name='description'
            onChange={onChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input my-2"
            id="exampleCheck1"
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary my-2" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddArtical
