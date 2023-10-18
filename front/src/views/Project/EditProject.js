import React from 'react';

// 기존 프로젝트를 수정하는 화면을 나타내는 함수입니다.
function EditProject() {
    // 기존 프로젝트의 세부 정보를 가져와서 폼에 채웁니다.
    return (
        <div>
            <h2>Edit Project</h2> {/* 화면 제목*/}
            <form>
                <input type="text" placeholder="Project Title" value="Existing Project Title" />{/* 프로젝트 제목 입력창*/}
                <textarea placeholder="Project Description">Existing Description</textarea> {/* 프로젝트 설명 입력창*/}
                <input type="number" placeholder="Goal Amount" value="Existing Goal Amount" /> {/* 목표 금액 입력창*/}
                {/* 다른 필요한 필드 추가 */}
                <button type="submit">Save Changes</button> {/*  변경사항 저장 버튼*/}
            </form>
        </div>
    );
}

export default EditProject; // 다른 파일에서 사용할 수 있게 내보냅니다.
