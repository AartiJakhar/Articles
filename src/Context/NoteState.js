import React, { useState } from "react";
import NoteContext from "./NoteContext";

function NoteState(props) {
  const host = "http://localhost:5000";
  const articalInitial = [];
  const [artical, setartical] = useState(articalInitial);
  const [loading, setloading] = useState(true);

  // fetch article
  const getArticals = async () => {
    //api call
    const response = await fetch(`${host}/api/artical/fetchallartical`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(title,description,ImageUrl)
    });
    const json = await response.json();
    setloading(false);

    setartical(json);
  };
  //add article
  const addArtical = (title, description, ImageUrl) => {
    // todo : api call
    console.log("adding artical");
    const articals = {
      _id: "633573cc45c0h1545bbca6ae9",
      user: "632a5c301f12f29h1b2fe04aa",
      title: title,
      description: description,
      ImageUrl: ImageUrl,
      date: "2022-09-29T10:30:36.317Z",
      __v: 0,
    };
    setartical(artical.concat(articals));
  };

  // SearchArctical
  const SearchArtical = async (title) => {
    const response = await fetch(
      "http://localhost:5000/api/artical/searchartical",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      }
    );
    // if (response.) {
      
    // }
    const json = await response.json();
    setloading(false);
      setartical(json);
   
  };

  const fechmyarti = (id) => {
    setloading(true);
    const newArtical = artical.filter((note) => {
      return note._id === id;
    });
    setartical(newArtical);
  };
  return (
    <NoteContext.Provider
      value={{
        SearchArtical,
        artical,
        setartical,
        addArtical,
        getArticals,
        fechmyarti,
        loading,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
