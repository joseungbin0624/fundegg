import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// 프로젝트와 관련된 정보를 저장하는 공간(컨텍스트)를 만듭니다.
const ProjectContext = createContext();

// 이 함수를 사용하면 프로젝트 관련 정보와 기능을 얻을 수 있습니다.
export const useProject = () => {
    return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
    // 모든 프로젝트의 목록을 저장하는 변수입니다.
    const [projects, setProjects] = useState([]);
    // 현재 선택된 프로젝트의 정보를 저장하는 변수입니다.
    const [selectedProject, setSelectedProject] = useState(null);

    // 모든 프로젝트의 목록을 서버에서 가져옵니다.
    const fetchProjects = async () => {
        try {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    // 특정 프로젝트의 정보를 서버에서 가져옵니다.
    const fetchProject = async (projectId) => {
        try {
            const response = await axios.get(`/api/projects/${projectId}`);
            setSelectedProject(response.data);
        } catch (error) {
            console.error('Error fetching specific project:', error);
        }
    };

    // 컴포넌트가 화면에 나타날 때 모든 프로젝트의 목록을 가져옵니다.
    useEffect(() => {
        fetchProjects();
    }, []);

    // 프로젝트와 관련된 정보와 기능을 제공합니다.
    const value = {
        projects,
        selectedProject,
        fetchProjects,
        fetchProject,
        // ... 다른 기능들도 여기에 추가할 수 있습니다 ...
    };

    // children 아래의 모든 컴포넌트에 프로젝트 정보와 기능을 제공합니다.
    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
};
