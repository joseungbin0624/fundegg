import React from 'react';

// "비밀번호 잊어버림" 화면을 표시하는 함수입니다.
function ForgotPassword() {
    return (
        <div>
            <h2>Forgot Password</h2> {/* 화면의 제목 */}
            <form> {/* 사용자에게 입력을 받는 양식 */}
                <input type="email" placeholder="Enter your email" /> {/* 이메일 입력창 */}
                <button type="submit">Send Reset Link</button> {/* 비밀번호 재설정 링크 전송 버튼 */}
            </form>
        </div>
    );
}

export default ForgotPassword; // 다른 파일에서 이 화면을 사용할 수 있도록 내보냅니다.
