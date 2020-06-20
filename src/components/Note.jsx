import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ id, title, content, deleteNote }) {
  return (
    <div className="note">
      <h1> {title}</h1>
      <p> {content}</p>
      <button onClick={() => deleteNote(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
