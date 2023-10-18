import React, { useState, useEffect } from 'react';

// 사용자의 기부 내역을 보여주는 화면을 나타내는 함수입니다.
function MyDonations() {
  const [donations, setDonations] = useState([]); // 기부 내역을 저장하는 배열과 그 값을 변경하는 함수
  
  useEffect(() => {
    // 기부 내역을 가져옵니다.
    fetch('/api/donations/me')
      .then(response => response.json())
      .then(data => setDonations(data))
      .catch(error => console.error('Error fetching donations:', error)); // 에러 발생 시 콘솔에 출력
  }, []);

  return (
    <div>
      <h1>My Donations</h1> {/* 화면 제목*/}
      <ul>
        {donations.map(donation => (
          <li key={donation.DonationID}>
            {donation.Project.Title} - ${donation.Amount} on {new Date(donation.DonationDate).toDateString()}
          </li> // 기부 내역 리스트
        ))}
      </ul>
    </div>
  );
}

export default MyDonations; // 다른 파일에서 사용할 수 있게 내보냅니다.
