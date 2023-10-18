// 필요한 라이브러리와 모듈을 불러옵니다.
import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';

// 기부와 관련된 데이터를 공유하기 위한 'context'를 생성합니다.
const DonationContext = createContext();

// 다른 곳에서 이 context를 쉽게 사용할 수 있게 해주는 함수입니다.
export const useDonation = () => {
    return useContext(DonationContext);
};

// 기부 데이터와 관련된 기능들을 제공하는 컴포넌트입니다.
export const DonationProvider = ({ children }) => {
    // 모든 기부 내역과 로딩 상태를 저장합니다.
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    // 특정 프로젝트의 기부 내역을 가져오는 함수입니다.
    const fetchDonations = async (projectId) => {
        try {
            // 기부 내역 API를 호출하여 기부 내역을 가져옵니다.
            const response = await Axios.get(`/api/projects/${projectId}/donations`);
            setDonations(response.data.donations);
        } catch (error) {
            console.error("Error fetching donations:", error);
        } finally {
            setLoading(false);  // 정보 가져오기가 완료되면 로딩 상태를 false로 바꿉니다.
        }
    };

    // 특정 프로젝트에 기부하는 함수입니다.
    const addDonation = async (projectId, amount) => {
        try {
            // 기부 API를 호출하여 기부합니다.
            const response = await Axios.post(`/api/projects/${projectId}/donations`, { amount });
            // 성공적으로 기부되면 기부 목록에 새 기부를 추가합니다.
            setDonations(prevDonations => [...prevDonations, response.data.donation]);
            return { success: true, message: 'Donation added successfully' };
        } catch (error) {
            // 기부 실패 시 에러 메시지를 반환합니다.
            return { success: false, message: error.response.data.message };
        }
    };

    // 이 context가 제공하는 값들을 정의합니다.
    const value = {
        donations,
        fetchDonations,
        addDonation,
    };

    return (
        <DonationContext.Provider value={value}>
            {!loading && children}  // 로딩이 완료되면 children 컴포넌트들을 보여줍니다.
        </DonationContext.Provider>
    );
};
