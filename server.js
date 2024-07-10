const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const thoughtRoutes = require('./routes/thoughts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
