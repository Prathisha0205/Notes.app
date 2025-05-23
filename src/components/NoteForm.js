import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
    color: '#ffffff'
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) return alert('Title and Content are required');
    addNote(note);
    setNote({ title: '', content: '', color: '#ffffff' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={note.content}
        onChange={handleChange}
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
        rows={4}
      />
      <label>
        Color: 
        <input
          type="color"
          name="color"
          value={note.color}
          onChange={handleChange}
          style={{ marginLeft: 8 }}
        />
      </label>
      <br />
      <button type="submit" style={{ marginTop: 10, padding: '8px 16px' }}>
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
