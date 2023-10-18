import React from 'react';

// 새로운 프로젝트를 생성하는 화면을 나타내는 함수입니다.
function CreateProject() {
    return (
        <div>
            <h2>Create New Project</h2> {/* 화면 제목*/}
            <form>
                <input type="text" placeholder="Project Title" /> {/* 프로젝트 제목 입력창 */}
                <textarea placeholder="Project Description"></textarea> {/* 프로젝트 설명 입력창*/}
                <input type="number" placeholder="Goal Amount" /> {/* 목표 금액 입력창 */}
                {/* 다른 필요한 필드 추가 */}
                <button type="submit">Create</button> {/* 프로젝트 생성 버튼 */}
            </form>
        </div>
    );
}

export default CreateProject; // 다른 파일에서 사용할 수 있게 내보냅니다.
