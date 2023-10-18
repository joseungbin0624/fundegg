import React from 'react';

// 404 오류 화면을 표시하는 함수입니다.
function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p><a href="/">Go back to the homepage</a></p> // 홈페이지로 돌아가는 링크
    </div>
  );
}

export default NotFound; 
