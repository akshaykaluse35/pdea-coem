const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  }
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/admin');
const notificationRoutes = require('./routes/notification');
const eventRoutes = require('./routes/eventRoutes'); // Import event routes
const facultyRoutes = require('./routes/facultyRoutes'); // Import faculty routes
const galleryRoutes = require('./routes/gallery'); // Import faculty routes


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // Include user routes
app.use('/api/admin', adminRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/events', eventRoutes); // Use event routes
app.use('/api/faculty', facultyRoutes); // Use faculty routes
app.use('/api/gallery', galleryRoutes); // Use faculty routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

