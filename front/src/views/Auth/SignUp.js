import React from 'react';

// 회원가입 화면을 표시하는 함수입니다.
function SignUp() {
    return (
        <div>
            <h2>Sign Up</h2> {/* 화면의 제목 */}
            <form> {/* 사용자에게 입력을 받는 양식 */}
                <input type="text" placeholder="Full Name" /> {/* 이름 입력창 */}
                <input type="email" placeholder="Email" /> {/* 이메일 입력창 */}
                <input type="password" placeholder="Password" /> {/* 비밀번호 입력창 */}
                <input type="password" placeholder="Confirm Password" /> {/* 비밀번호 확인 입력창 */}
                <button type="submit">Sign Up</button> {/* 회원가입 버튼 */}
            </form>
        </div>
    );
}

export default SignUp; // 다른 파일에서 이 화면을 사용할 수 있도록 내보냅니다.
