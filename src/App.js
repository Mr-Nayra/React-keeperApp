import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";

const nt = [
];

const App = () => {
  const [notes, changeNotes] = React.useState(nt);

  const Add = (note) => {
    changeNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };

  const deleteItemHandler = (noteId) => {
    changeNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.key !== noteId);
      return updatedNotes;
    });
  };
  return (
    <>
      <Header />
      <CreateArea AddNote={Add} />
      <Notes notes={notes} deleteNote={deleteItemHandler} />
      <Footer />
    </>
  );
};

export default App;
