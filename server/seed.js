const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path as necessary

// MongoDB connection string
const dbUrl = 'mongodb+srv://basit740:admin1122@bobisoftprojects.ljxbi.mongodb.net/book-me-app?retryWrites=true&w=majority&appName=BobiSoftProjects'; // Update yourDatabaseName and URL as needed

// Connect to MongoDB
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully.');
}).catch(err => {
    console.error('Connection error:', err);
});

// Create a new user
const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: 'admin', // Change the username as needed
    password: 'test', // Change the password as needed
    isLoggedIn: false
});

// Save the new user
newUser.save()
    .then(() => {
        console.log('User (admin) has been added successfully.');
        mongoose.disconnect(); // Optional: disconnect after operation is complete
    })
    .catch(err => {
        console.error('Error adding user:', err);
    });
