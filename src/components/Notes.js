import React from "react";
import Note from "./Note";
const Notes = (props) => {
  return (
    <div>
      {props.notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default Notes;
