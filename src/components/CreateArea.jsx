import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function CreateArea({ submitNote }) {
  const blankNote = {
    title: "",
    content: ""
  };
  const [note, setNote] = useState(blankNote);
  const [wasClicked, setClicked] = useState(false);
  function handleChange(event) {
    const { value, name } = event.target;

    setNote(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitNote(prevValue => [...prevValue, note]);
    setNote(blankNote);
  }
  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {wasClicked && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={() => setClicked(true)}
          value={note.content}
          placeholder="Take a note..."
          rows={wasClicked ? "3" : "1"}
        />

        <Zoom in={wasClicked}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
