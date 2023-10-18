// React와 필요한 라이브러리들을 불러옵니다.
import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';

// 사용자 인증과 관련된 데이터를 공유하기 위한 'context'를 생성합니다.
const AuthContext = createContext();

// 다른 곳에서 이 context를 쉽게 사용할 수 있게 해주는 함수입니다.
export const useAuth = () => {
    return useContext(AuthContext);
};

// 사용자 인증 데이터와 관련된 기능들을 제공하는 컴포넌트입니다.
export const AuthProvider = ({ children }) => {
    // 현재 로그인한 사용자의 정보와 로딩 상태를 저장합니다.
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 이메일과 비밀번호로 로그인하는 함수입니다.
    const login = async (email, password) => {
        try {
            // 로그인 API를 호출합니다.
            const response = await Axios.post('/api/login', { email, password });
            // 성공적으로 로그인하면 사용자 정보를 저장합니다.
            setCurrentUser(response.data.user);
            return { success: true, message: 'Logged in successfully' };
        } catch (error) {
            // 로그인 실패 시 에러 메시지를 반환합니다.
            return { success: false, message: error.response.data.message };
        }
    };

    // 로그아웃 함수입니다.
    const logout = () => {
        setCurrentUser(null); // 사용자 정보를 지웁니다.
    };

    // 컴포넌트가 화면에 나타나면 현재 사용자의 정보를 가져옵니다.
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await Axios.get('/api/currentUser');
                setCurrentUser(response.data.user);
            } catch (error) {
                console.error("Error fetching current user:", error);
            } finally {
                setLoading(false);  // 정보 가져오기가 완료되면 로딩 상태를 false로 바꿉니다.
            }
        };

        fetchCurrentUser();
    }, []);

    // 이 context가 제공하는 값들을 정의합니다.
    const value = {
        currentUser,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}  // 로딩이 완료되면 children 컴포넌트들을 보여줍니다.
        </AuthContext.Provider>
    );
};
