                                                                                                                                               import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NoteForm from "./components/NoteForm";
import NoteList from './components/Notelist';


function App() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from backend
  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/notes');
      setNotes(res.data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add a new note
  const addNote = async (note) => {
    try {
      await axios.post('http://localhost:5000/api/notes', note);
      fetchNotes();
    } catch (err) {
      console.error('Failed to add note:', err);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
                                         
                                                                                            