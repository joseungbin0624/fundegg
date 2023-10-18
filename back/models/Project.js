const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    description: String,
    goalAmount: Number,
    currentAmount: { type: Number, default: 0 },
    startDate: Date,
    endDate: Date,
    image: String,
    status: { type: String, enum: ['진행중', '완료'], default: '진행중' }
});

module.exports = mongoose.model('Project', ProjectSchema);
