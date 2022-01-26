import React from "react";
import Note from "./Note";
const Notes = (props) => {
  return (
    <div>
      {props.notes.map((note, index) => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          deleteNote={props.deleteNote}
        />
      ))}
    </div>
  );
};

export default Notes;
