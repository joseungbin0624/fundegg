import React from 'react';

// 비밀번호 재설정 화면을 표시하는 함수입니다.
function ResetPassword() {
    return (
        <div>
            <h2>Reset Password</h2> {/* 화면의 제목 */}
            <form> {/* 사용자에게 입력을 받는 양식 */}
                <input type="password" placeholder="New Password" /> {/* 새 비밀번호 입력창 */}
                <input type="password" placeholder="Confirm New Password" /> {/* 새 비밀번호 확인 입력창 */}
                <button type="submit">Reset Password</button> {/* 비밀번호 재설정 버튼 */}
            </form>
        </div>
    );
}

export default ResetPassword; // 다른 파일에서 이 화면을 사용할 수 있도록 내보냅니다.
