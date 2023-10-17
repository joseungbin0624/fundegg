const Project = require('../models/Project');

// 모든 프로젝트 가져오기
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};

// 프로젝트 생성하기
exports.createProject = async (req, res) => {
    const { title, description, goalAmount, startDate, endDate, image } = req.body;
    
    try {
        const newProject = new Project({ title, description, goalAmount, startDate, endDate, image });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};

// 프로젝트 ID로 상세 정보 가져오기
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).send({ message: 'Project not found' });
        res.json(project);
    } catch (error) {
        res.status(500).send({ message: 'Server Error' });
    }
};
