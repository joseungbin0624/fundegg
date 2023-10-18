import React from 'react';

// 플랫폼에 대한 정보를 표시하는 화면입니다.
function About() {
  return (
    <div>
      <h1>About Our Platform</h1>
      <p>Welcome to our crowdfunding platform. Here, you can discover various projects, support them, or even start your own project.</p>
      <h2>Features:</h2>
      <ul>
        {/* 플랫폼의 주요 기능 목록 */}
        <li>User registration and login</li>
        <li>Create, edit, and delete projects</li>
        <li>Support projects with donations</li>
        <li>View all projects and their details</li>
        <li>And many more...</li>
      </ul>
    </div>
  );
}

export default About; 
