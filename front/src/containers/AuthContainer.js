import React, { useState } from 'react';
import SignUp from '../views/Auth/SignUp';
import Login from '../views/Auth/Login';
import ForgotPassword from '../views/Auth/ForgotPassword';
import ResetPassword from '../views/Auth/ResetPassword';

// 사용자 인증을 위한 컨테이너 컴포넌트입니다.
function AuthContainer({ history }) {
  // 현재 인증 모드를 상태로 관리합니다. 기본 모드는 'login'입니다.
  const [authMode, setAuthMode] = useState('login'); // Default mode

  // 사용자 등록 처리를 위한 함수입니다.
  const handleSignUp = (userData) => {
    // 사용자 등록 API 호출
    fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        history.push('/login'); // 성공적인 등록 후 로그인 페이지로 리다이렉트합니다.
      } else {
        throw new Error(data.message);
      }
    })
    .catch(error => console.error('Error during sign up:', error));
  };

  // 로그인 처리를 위한 함수입니다.
  const handleLogin = (credentials) => {
    // 로그인 API 호출
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // 토큰, 사용자 데이터 또는 다른 필요한 정보를 저장합니다.
        // 앱의 보안 부분으로 리다이렉트합니다.
        history.push('/dashboard'); 
      } else {
        throw new Error(data.message);
      }
    })
    .catch(error => console.error('Error during login:', error));
  };

  // 비슷하게, handleForgotPassword와 handleResetPassword 함수를 구현할 수 있습니다.

  return (
    <div>
      {/* 현재 인증 모드에 따라서 다른 컴포넌트를 렌더링합니다. */}
      {authMode === 'signup' && <SignUp onSignUp={handleSignUp} />}
      {authMode === 'login' && <Login onLogin={handleLogin} />}
      {authMode === 'forgotPassword' && <ForgotPassword />}
      {authMode === 'resetPassword' && <ResetPassword />}
      
      {/* 다른 인증 모드로 전환하기 위한 버튼 또는 링크 */}
      <button onClick={() => setAuthMode('signup')}>Sign Up</button>
      <button onClick={() => setAuthMode('login')}>Login</button>
      <button onClick={() => setAuthMode('forgotPassword')}>Forgot Password?</button>
    </div>
  );
}

export default AuthContainer;
