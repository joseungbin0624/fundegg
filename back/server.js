const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// 라우트 모듈 임포트
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const donationRoutes = require('./routes/donationRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

// 데이터베이스 연결 설정
const MONGODB_URI = 'mongodb://127.0.0.1:27017/fundegg'; // 데이터베이스 연결 문자열을 설정해주세요.
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// 미들웨어 설정
app.use(cors()); // CORS 미들웨어 설정 (프론트엔드와 백엔드 간의 요청 허용)
app.use(bodyParser.json()); // 요청 본문을 JSON 형식으로 파싱

// 라우트 연결
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // 테스팅 등을 위해 app 객체를 내보냅니다.
