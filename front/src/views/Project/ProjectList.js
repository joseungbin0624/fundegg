import React from 'react';

// 모든 프로젝트의 목록을 보여주는 화면을 나타내는 함수입니다.
function ProjectList() {
    // 여기서 API를 통해 프로젝트 목록을 가져올 수 있습니다.
    return (
        <div>
            <h2>Projects</h2> {/* 화면의 제목 */}
            {/* 프로젝트들을 순회하여 여기에 표시합니다. */}
        </div>
    );
}

export default ProjectList; // 다른 파일에서 사용할 수 있게 내보냅니다.
