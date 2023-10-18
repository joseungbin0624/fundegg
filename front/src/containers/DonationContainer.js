import React, { useState, useEffect } from 'react';
import DonationView from '../views/DonationView';
import Axios from 'axios';

// 프로젝트에 관련된 기부들을 관리하는 컨테이너 컴포넌트입니다.
function DonationContainer({ match }) {
    // 기부들, 로딩 상태, 오류 상태를 관리하는 상태 변수들입니다.
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // URL에서 프로젝트 ID를 추출합니다.
    const projectId = match.params.id;

    // 컴포넌트가 마운트 될 때 기부들을 가져옵니다.
    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await Axios.get(`/api/projects/${projectId}/donations`);
                setDonations(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDonations();
    }, [projectId]);

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error fetching donations: {error.message}</div>}
            {donations && <DonationView donations={donations} />}
        </div>
    );
}

export default DonationContainer;