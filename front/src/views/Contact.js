import React from 'react';

// 연락처 정보를 표시하는 화면입니다.
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, please contact us at:</p>
      <p>Email: support@ourplatform.com</p>
      <h2>Stay Connected:</h2>
      <ul>
        {/* 소셜 미디어 링크 */}
        <li>Facebook: [Link]</li>
        <li>Twitter: [Link]</li>
        <li>Instagram: [Link]</li>
      </ul>
    </div>
  );
}

export default Contact;
