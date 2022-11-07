import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../Context/NoteContext";
function Search() {
  const context = useContext(NoteContext)
  const [credentials, setcredentials] = useState({ title: "" });
  const {SearchArtical,getArticals}=context;
  //redirect 
  const navigate=useNavigate()
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(credentials.title)
    if(credentials.title===""){
      navigate('/artical')
      getArticals()
      
    }
    else{
     SearchArtical(credentials.title);

   }
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <form
      className="d-flex"
      style={{ marginTop: "5rem" }}
      role="search"
      onSubmit={handleSearch}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={credentials.title}
        name="title"
        onChange={onChange}
        minLength={5}

      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
