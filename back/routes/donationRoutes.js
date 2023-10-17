const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

// 특정 프로젝트에 대한 모든 기부 가져오기
router.get('/project/:projectId', donationController.getDonationsForProject);

// 기부하기
router.post('/', donationController.createDonation);

module.exports = router;
