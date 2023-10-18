const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    amount: Number,
    donationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', DonationSchema);
