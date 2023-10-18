const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// 특정 프로젝트에 대한 모든 댓글 가져오기
router.get('/project/:projectId', commentController.getCommentsForProject);

// 댓글 작성하기
router.post('/', commentController.createComment);

module.exports = router;
