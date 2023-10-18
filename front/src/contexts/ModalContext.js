import React, { createContext, useContext, useState } from 'react';

// '모달'을 위한 저장 공간(컨텍스트)를 만듭니다.
const ModalContext = createContext();

// 이 함수를 사용하면 모달 관련 정보와 기능을 얻을 수 있습니다.
export const useModal = () => {
    return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
    // 모달이 열려있는지 닫혀있는지 확인하는 변수입니다.
    const [isOpen, setIsOpen] = useState(false);
    // 모달에 표시될 내용을 저장하는 변수입니다.
    const [modalContent, setModalContent] = useState(null);

    // 특정 내용을 가진 모달을 엽니다.
    const openModal = (content) => {
        setModalContent(content); // 모달에 표시될 내용을 설정합니다.
        setIsOpen(true); // 모달을 엽니다.
    };

    // 모달을 닫습니다.
    const closeModal = () => {
        setModalContent(null); // 모달 내용을 지웁니다.
        setIsOpen(false); // 모달을 닫습니다.
    };

    // 모달과 관련된 정보와 기능을 제공합니다.
    const value = {
        isOpen,
        modalContent,
        openModal,
        closeModal,
    };

    // children 아래의 모든 컴포넌트에 모달 정보와 기능을 제공합니다.
    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};
