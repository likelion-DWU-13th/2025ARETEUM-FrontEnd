import { styled } from "styled-components";

export const Components = styled.div`
  z-index: 100;
  width: 165px;
  height: 140px;
  flex-shrink: 0;
  padding: 10px;
  position: relative;
  margin: 7px;

  border-radius: 15px;
  border: 1px dashed rgba(230, 205, 138, 0.5);
  background: rgba(255, 255, 255, 0.7);

  #scrap {
    position: absolute;
    right: 10px;
  }
`;

export const Category = styled.div`
  width: 50px;
  height: 20px;

  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #e37aad;
  background: #e37aad;
  box-shadow: 0 0 2px 0 #db7ead;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Title = styled.div`
  margin: 8px 0;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: -webkit-box; /* Flexbox가 아니라 text 클램프용 박스 */
  -webkit-line-clamp: 3; /* 최대 3줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word; /* 단어가 길면 줄바꿈 */
`;

export const Bar = styled.div`
  height: 21px;
  width: 165px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Text = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
