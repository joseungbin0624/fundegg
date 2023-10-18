import React, { useState, useEffect } from 'react';

// 사용자의 프로필 페이지를 표시하는 화면입니다.
function UserProfile({ match }) {
  // 사용자 정보를 저장하는 상태입니다.
  const [user, setUser] = useState(null);

  // 사용자의 ID를 URL에서 가져옵니다.
  const userId = match.params.id; 

  // 페이지가 로드될 때 사용자 정보를 서버에서 가져옵니다.
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [userId]);

  // 사용자 데이터가 아직 로드되지 않았을 때 'Loading...'을 표시합니다.
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <img src={user.ProfileImage} alt="User profile" /> {/* 사용자의 프로필 이미지 */}
      <h1>{user.Username}</h1> {/* 사용자의 이름 */}
      <p>Email: {user.Email}</p> {/* 사용자의 이메일 */}
      <p>Joined: {new Date(user.JoinedDate).toDateString()}</p> {/* 가입 날짜 */}
      {/* 여기에 추가적인 사용자 정보를 표시할 수 있습니다. */}
      <button>Edit Profile</button> {/* 프로필 편집 페이지로 이동할 버튼 */}
    </div>
  );
}

export default UserProfile; 
