import React, { useState, useEffect } from 'react';

// 사용자 프로필을 수정하는 화면을 나타내는 함수입니다.
function EditUserProfile({ match, history }) {
  const [user, setUser] = useState({
    Username: '',
    Email: '',
    ProfileImage: '',
    // 다른 필요한 필드 추가
  });

  const userId = match.params.id; // 사용자 ID를 가져옵니다.
  
  useEffect(() => {
    // 수정을 위한 사용자 데이터를 가져옵니다.
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data for editing:', error));
  }, [userId]);

  const handleInputChange = (event) => {
    // 입력된 값을 사용자 데이터에 반영합니다.
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = () => {
    // API 호출하여 사용자 프로필을 업데이트합니다.
    fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => {
      if (response.ok) {
        history.push(`/users/${userId}`); // 업데이트 후 사용자 프로필 페이지로 리다이렉트합니다.
      } else {
        throw new Error('Failed to update profile');
      }
    })
    .catch(error => console.error('Error updating user profile:', error));
  };

  return (
    <div>
      <h1>Edit Profile</h1> {/* 화면의 제목*/}
      <input
        type="text"
        name="Username"
        value={user.Username}
        onChange={handleInputChange}
        placeholder="Username"
      /> {/* 사용자명 입력창*/}
      <input
        type="email"
        name="Email"
        value={user.Email}
        onChange={handleInputChange}
        placeholder="Email"
      /> {/* 이메일 입력창*/}
      {/* 프로필 수정을 위한 다른 입력 필드를 여기에 추가합니다. */}
      <button onClick={handleSubmit}>Update Profile</button> {/* 프로필 업데이트 버튼*/}
    </div>
  );
}

export default EditUserProfile; // 다른 파일에서 사용할 수 있게 내보냅니다.
