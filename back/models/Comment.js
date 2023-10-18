const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    content: String,
    commentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
