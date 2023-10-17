const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// 모든 프로젝트 가져오기
router.get('/', projectController.getAllProjects);

// 프로젝트 생성하기
router.post('/', projectController.createProject);

// 프로젝트 ID로 상세 정보 가져오기
router.get('/:id', projectController.getProjectById);

module.exports = router;
