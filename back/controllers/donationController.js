const Donation = require('../models/Donation');

// 특정 프로젝트에 대한 모든 기부 가져오기
exports.getDonationsForProject = async (req, res) => {
    try {
        const donations = await Donation.find({ project: req.params.projectId });
        res.json(donations);
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};

// 기부하기
exports.createDonation = async (req, res) => {
    const { amount, donor, project } = req.body;
    
    try {
        const newDonation = new Donation({ amount, donor, project });
        await newDonation.save();
        res.status(201).json(newDonation);
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};
