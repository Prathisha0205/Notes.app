import React from "react";

const NoteList = ({ notes, deleteNote }) => {
  if (!notes || notes.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <div
          key={note._id}
          className="note-card"
          style={{
            backgroundColor: note.color || "#fff"
          }}
        >
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
