import React from 'react';

// 로그인 화면을 표시하는 함수입니다.
function Login() {
    return (
        <div>
            <h2>Login</h2> {/* 화면의 제목 */}
            <form> {/* 사용자에게 입력을 받는 양식 */}
                <input type="email" placeholder="Email" /> {/* 이메일 입력창 */}
                <input type="password" placeholder="Password" /> {/* 비밀번호 입력창 */}
                <button type="submit">Login</button> {/* 로그인 버튼 */}
            </form>
        </div>
    );
}

export default Login; // 다른 파일에서 이 화면을 사용할 수 있도록 내보냅니다.
