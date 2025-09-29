// src/utils/api.js

/**
 * @param {string} boothId - 찾을 부스
 * @returns {Promise<object | null} 부스 객체 or null
 */
export const getBoothData = async (boothId) => {
    try {
        const res = await fetch(`/api/booths/${boothId}`);
        
        if (!res.ok) {
            console.warn(`API 응답 오류: ${res.status} - ID: ${boothId}`);
            return null; 
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("데이터를 불러오는 중 네트워크 오류 발생:", error);
        return null;
    }
};