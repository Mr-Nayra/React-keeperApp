import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";

const nt = [
  {
    key: 1,
    title: "Delegation",
    content:
      "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
  },
  {
    key: 2,
    title: "Loops",
    content:
      "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
  },
  {
    key: 3,
    title: "Arrays",
    content:
      "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
  },
  {
    key: 4,
    title: "Hardware vs. Software",
    content:
      "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
  },
];

const App = () => {
  const [notes, incrementNotes] = React.useState(nt);

  const Add = (note) => {
    incrementNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };

  return (
    <>
      <Header />
      <CreateArea AddNote={Add} />
      <Notes notes={notes} />
      <Footer />
    </>
  );
};

export default App;
