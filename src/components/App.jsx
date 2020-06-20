import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Note Title",
      content: "Note Content"
    }
  ]);
  function deleteNotes(id) {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea submitNote={setNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNotes}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
