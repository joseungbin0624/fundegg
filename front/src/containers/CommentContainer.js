// CommentContainer

import React, { useState, useEffect } from 'react';
import CommentView from '../views/CommentView';
import Axios from 'axios';

// 프로젝트에 관련된 댓글들을 관리하는 컨테이너 컴포넌트입니다.
function CommentContainer({ match }) {
    // 댓글들, 로딩 상태, 오류 상태를 관리하는 상태 변수들입니다.
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // URL에서 프로젝트 ID를 추출합니다.
    const projectId = match.params.id;

    // 컴포넌트가 마운트 될 때 댓글들을 가져옵니다.
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await Axios.get(`/api/projects/${projectId}/comments`);
                setComments(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [projectId]);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error fetching comments: {error.message}</div>}
            {comments && <CommentView comments={comments} />}
        </div>
    );
}

export default CommentContainer;