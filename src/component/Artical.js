import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../Context/NoteContext'
import Card from './Card';
import Viewblog from './Viewblog';

function Artical() {

    const data = useContext(NoteContext)
    const {artical,getArticals,fechmyarti,loading}=data;
 useEffect(()=>{
   getArticals()
   // eslint-disable-next-line
   fechmyarti()
 },[])
    const style = {
      display:"flex",
      flexDirection:"row",
       flexWrap:"wrap",
       justifyContent:'center',
          }
  return (
    <div> 
  { loading &&   <div style={style}> 
        {artical.map((note)=>{
       return  <Viewblog key = {note._id} note={note} getArticals={getArticals}/>
        })} </div>}
  { !loading &&    <div style={style}> 
        {artical.map((note)=>{
       return <Card key = {note._id} note={note} loading={loading}/>
        })} </div>}
  
    </div>
  )
}

export default Artical
