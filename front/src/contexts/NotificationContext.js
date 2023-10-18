import React, { createContext, useContext, useState } from 'react';

// 알림을 위한 저장 공간(컨텍스트)를 만듭니다.
const NotificationContext = createContext();

// 이 함수를 사용하면 알림 관련 정보와 기능을 얻을 수 있습니다.
export const useNotification = () => {
    return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
    // 알림이 보이는지 숨겨져 있는지 확인하는 변수입니다.
    const [isVisible, setIsVisible] = useState(false);
    // 알림에 표시될 내용을 저장하는 변수입니다.
    const [notificationContent, setNotificationContent] = useState(null);
    // 알림의 종류(정보, 성공, 경고, 오류)를 저장하는 변수입니다.
    const [notificationType, setNotificationType] = useState('info'); 

    // 특정 내용과 종류를 가진 알림을 보여줍니다.
    const showNotification = (content, type = 'info') => {
        setNotificationContent(content); 
        setNotificationType(type); 
        setIsVisible(true); 

        // 5초 후에 알림을 자동으로 숨깁니다.
        setTimeout(() => {
            hideNotification();
        }, 5000); 
    };

    // 알림을 숨깁니다.
    const hideNotification = () => {
        setNotificationContent(null); 
        setIsVisible(false); 
    };

    // 알림과 관련된 정보와 기능을 제공합니다.
    const value = {
        isVisible,
        notificationContent,
        notificationType,
        showNotification,
        hideNotification,
    };

    // children 아래의 모든 컴포넌트에 알림 정보와 기능을 제공합니다.
    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};
