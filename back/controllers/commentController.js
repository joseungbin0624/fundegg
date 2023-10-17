const Comment = require('../models/Comment');

// 특정 프로젝트에 대한 모든 댓글 가져오기
exports.getCommentsForProject = async (req, res) => {
    try {
        const comments = await Comment.find({ project: req.params.projectId });
        res.json(comments);
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};

// 댓글 작성하기
exports.createComment = async (req, res) => {
    const { content, author, project } = req.body;
    
    try {
        const newComment = new Comment({ content, author, project });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};


