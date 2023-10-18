// 이 파일은 'UserProfileContainer' 부분을 담당하며,
// 사용자의 프로필 정보를 가져와 화면에 표시합니다.

import React, { useState, useEffect } from 'react';
import UserProfile from '../views/User/UserProfile'; // 사용자 프로필 화면을 표시하는 파일
import Axios from 'axios';

function UserProfileContainer({ match }) {
  // 아래 3줄은 화면에 표시할 내용을 저장하는 '상태'입니다.
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 현재 페이지의 주소에서 사용자의 고유 번호(ID)를 가져옵니다.
  const userId = match.params.id;

  // 화면이 마운트될 때 아래 코드가 실행됩니다.
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(`/api/users/${userId}`);
        setUser(response.data); // 가져온 사용자 정보를 '상태'에 저장합니다.
      } catch (err) {
        setError(err); // 오류 발생시 '상태'에 오류 내용을 저장합니다.
      } finally {
        setLoading(false); // 정보를 모두 가져왔다면 로딩 상태를 '완료'로 변경합니다.
      }
    };
    
    fetchUserData();
  }, [userId]); // 주의: 이 코드는 userId가 변경될 때마다 다시 실행됩니다.

  return (
    <div>
      {loading && <div>Loading...</div>} {/* 로딩 중일 때는 'Loading...'이라고 표시됩니다. */}
      {error && <div>Error fetching user data: {error.message}</div>} {/* 오류 발생시 오류 내용을 표시합니다. */}
      {user && <UserProfile user={user} />} {/* 사용자 정보가 있다면 화면에 보여줍니다. */}
    </div>
  );
}

export default UserProfileContainer;
