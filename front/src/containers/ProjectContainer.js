// 이 파일은 'ProjectContainer'라는 부분을 담당하며, 
// 프로젝트의 정보, 댓글, 기부 내용을 한 번에 보여줍니다.

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import ProjectView from '../views/ProjectView';  // 화면에 표시될 부분을 담당하는 파일

const ProjectContainer = () => {
    // 아래 3줄은 화면에 보여줄 내용을 저장하는 '상자'입니다.
    const [project, setProject] = useState(null);
    const [comments, setComments] = useState([]);
    const [donations, setDonations] = useState([]);

    // 현재 페이지의 주소에서 프로젝트의 고유 번호(ID)를 가져옵니다.
    const { projectId } = useParams(); 

    // 화면이 뜰 때 아래의 코드들이 실행됩니다.
    useEffect(() => {
        // 프로젝트의 기본 정보를 가져옵니다.
        Axios.get(`/api/projects/${projectId}`)
            .then(response => {
                setProject(response.data); // 가져온 정보를 '상자'에 저장합니다.
            })
            .catch(error => {
                console.error('Failed to fetch project:', error); // 오류 발생시 콘솔에 표시합니다.
            });

        // 프로젝트에 달린 댓글들을 가져옵니다.
        Axios.get(`/api/projects/${projectId}/comments`)
            .then(response => {
                setComments(response.data); // 가져온 댓글들을 '상자'에 저장합니다.
            })
            .catch(error => {
                console.error('Failed to fetch comments:', error);
            });

        // 프로젝트에 했던 기부 내역들을 가져옵니다.
        Axios.get(`/api/projects/${projectId}/donations`)
            .then(response => {
                setDonations(response.data); // 가져온 기부 내역들을 '상자'에 저장합니다.
            })
            .catch(error => {
                console.error('Failed to fetch donations:', error);
            });

    }, [projectId]); // 주의: 이 코드는 projectId가 변경될 때마다 다시 실행됩니다.

    return (
        <ProjectView 
            project={project} 
            comments={comments} 
            donations={donations} 
        /> // 화면에 내용을 보여줍니다.
    );
};

export default ProjectContainer;
