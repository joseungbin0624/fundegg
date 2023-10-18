import React from 'react';
import { Link } from 'react-router-dom';

// 다른 파일에서 정의된 버튼 컴포넌트를 가져옵니다.
import { Button } from '../components/common/Button';

// 홈페이지 화면을 표시하는 함수입니다.
function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Our Service!</h1>
                <p>Discover amazing projects and support your favorites.</p>
            </header>

            {/* 플랫폼의 주요 기능에 대한 접근성을 제공하는 섹션 */}
            <section className="features">
                <div className="feature">
                    <h2>Find a Project</h2>
                    <p>Explore and support projects that you love.</p>
                    <Link to="/projects"><Button label="Browse Projects" /></Link>
                </div>
                <div className="feature">
                    <h2>Start Your Own</h2>
                    <p>Have a brilliant idea? Start your own project and get support.</p>
                    <Link to="/create-project"><Button label="Start Project" /></Link>
                </div>
            </section>

            {/* 추가적인 내용이 필요하다면 여기에 넣을 수 있습니다. */}
            
            <footer className="home-footer">
                <p>&copy; 2023 Our Service Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home; 
