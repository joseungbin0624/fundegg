import React, { useState } from 'react';

// 프로젝트에 기부하는 화면을 나타내는 함수입니다.
function Donation({ match }) {
  const [amount, setAmount] = useState(0); // 기부하려는 금액을 저장하는 변수와 그 값을 변경하는 함수
  
  const projectId = match.params.id; // 프로젝트의 ID를 가져옵니다.
  
  const handleDonation = () => {
    // 여기서 백엔드와 통신하여 기부를 처리합니다.
    // 또한, 프로젝트의 현재 금액을 기부액으로 업데이트합니다.
    // 사용자에게 기부 성공에 대해 알립니다.
  }

  return (
    <div>
      <h1>Support the Project</h1> {/* 화면 제목*/}
      <p>Choose the amount you want to donate:</p> {/*사용자 안내 문구*/}
      <input 
        type="number" 
        value={amount} 
        onChange={e => setAmount(e.target.value)} // 금액 입력창
      />
      <button onClick={handleDonation}>Donate</button> {/* 기부 버튼*/}
    </div>
  );
}

export default Donation; // 다른 파일에서 사용할 수 있게 내보냅니다.
