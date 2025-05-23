// Load environment variables from .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined in the .env file");
  process.exit(1); // Exit the app
}

// Connect to MongoDB using connection string from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Import and use notes routes
const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

// Start server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
