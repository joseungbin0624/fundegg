// 필요한 라이브러리와 모듈을 불러옵니다.
import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';

// 댓글과 관련된 데이터를 공유하기 위한 'context'를 생성합니다.
const CommentContext = createContext();

// 다른 곳에서 이 context를 쉽게 사용할 수 있게 해주는 함수입니다.
export const useComment = () => {
    return useContext(CommentContext);
};

// 댓글 데이터와 관련된 기능들을 제공하는 컴포넌트입니다.
export const CommentProvider = ({ children }) => {
    // 모든 댓글들과 로딩 상태를 저장합니다.
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    // 특정 프로젝트의 댓글들을 가져오는 함수입니다.
    const fetchComments = async (projectId) => {
        try {
            // 댓글 API를 호출하여 댓글들을 가져옵니다.
            const response = await Axios.get(`/api/projects/${projectId}/comments`);
            setComments(response.data.comments);
        } catch (error) {
            console.error("Error fetching comments:", error);
        } finally {
            setLoading(false);  // 정보 가져오기가 완료되면 로딩 상태를 false로 바꿉니다.
        }
    };

    // 특정 프로젝트에 댓글을 추가하는 함수입니다.
    const addComment = async (projectId, content) => {
        try {
            // 댓글 추가 API를 호출합니다.
            const response = await Axios.post(`/api/projects/${projectId}/comments`, { content });
            // 성공적으로 추가되면 댓글 목록에 새 댓글을 추가합니다.
            setComments(prevComments => [...prevComments, response.data.comment]);
            return { success: true, message: 'Comment added successfully' };
        } catch (error) {
            // 댓글 추가 실패 시 에러 메시지를 반환합니다.
            return { success: false, message: error.response.data.message };
        }
    };

    // 특정 댓글을 수정하는 함수입니다.
    const updateComment = async (commentId, updatedContent) => {
        try {
            // 댓글 수정 API를 호출합니다.
            const response = await Axios.put(`/api/comments/${commentId}`, { content: updatedContent });
            const updatedComment = response.data.comment;
            // 성공적으로 수정되면 댓글 목록에서 해당 댓글을 수정합니다.
            setComments(prevComments => prevComments.map(c => c._id === commentId ? updatedComment : c));
            return { success: true, message: 'Comment updated successfully' };
        } catch (error) {
            // 댓글 수정 실패 시 에러 메시지를 반환합니다.
            return { success: false, message: error.response.data.message };
        }
    };

    // 특정 댓글을 삭제하는 함수입니다.
    const deleteComment = async (commentId) => {
        try {
            // 댓글 삭제 API를 호출합니다.
            await Axios.delete(`/api/comments/${commentId}`);
            // 성공적으로 삭제되면 댓글 목록에서 해당 댓글을 제거합니다.
            setComments(prevComments => prevComments.filter(c => c._id !== commentId));
            return { success: true, message: 'Comment deleted successfully' };
        } catch (error) {
            // 댓글 삭제 실패 시 에러 메시지를 반환합니다.
            return { success: false, message: error.response.data.message };
        }
    };

    // 이 context가 제공하는 값들을 정의합니다.
    const value = {
        comments,
        fetchComments,
        addComment,
        updateComment,
        deleteComment
    };

    return (
        <CommentContext.Provider value={value}>
            {!loading && children}  // 로딩이 완료되면 children 컴포넌트들을 보여줍니다.
        </CommentContext.Provider>
    );
};
