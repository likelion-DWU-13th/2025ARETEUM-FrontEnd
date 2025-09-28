import React from "react";
import * as D from "../../styles/StyledDescription"; 

const DetailInfo = ({ 
    category,         
    description,     
    menus,            
    products,         
    timeline,         
    notes,            
    program,
    event,            
    participation,   
    prizes,         
    somsomiGuide,     
    mapImageUrl       
}) => {

    // 1. 해당 카테고리인지 확인하는 함수
    const isCategory = (...cats) => cats.includes(category);
    
    // 2. 데이터 배열이 비어있지 않은지 확인하는 함수
    const hasData = (data) => Array.isArray(data) ? data.length > 0 : !!data;

    /**
     * 3, 정보 섹션을 렌더링하는 범용 컴포넌트
     * @param {string} title - 섹션 제목
     * @param {any} data - 렌더링할 데이터 (문자열, JSX, 배열 등)
     */
    const renderSection = (title, data) => (
      <D.InfoWrapper>
          <D.SubTitle>{title}</D.SubTitle>
          <D.InfoBox>
              {/* 타임라인 섹션 렌더링 */}
              {title === '타임라인' && hasData(data) && (
                  data.map((item, index) => (
                      <D.MenuItem key={index}> 
                          {/* 이름 (판소리) */}
                          <D.MenuName>
                            <span style={{ color: '#E37AAD', marginRight: "5px" }}>•</span> 
                            {item.name}
                          </D.MenuName> 
                          
                          {/* 점선 대시 */}
                          <D.MenuDash />
                          
                          {/* 시간 (17:30~17:50) */}
                          <D.MenuPrice>{item.timeRange}</D.MenuPrice>
                      </D.MenuItem>
                  ))
              )}

              {/* 유의사항 섹션 렌더링 */}
              {title === '유의사항' && hasData(data) && (
                  data.map((note, index) => (
                      <D.InfoItem key={index} style={{ alignItems: 'flex-start', display: "flex" }}>
                          {/* 점 아이콘 추가 및 텍스트 */}
                          <span style={{ color: '#E37AAD' }}>•</span> 
                          {note}
                      </D.InfoItem>
                  ))
              )}

            {/* 이벤트 섹션 렌더링 */}
            {title === '이벤트' && hasData(data) && (
                data.map((event, index) => (
                    <D.InfoItem 
                        key={index} 
                        style={{ alignItems: 'flex-start', flexDirection: 'column'  }}>
                        {/* 텍스트를 줄(\n) 단위로 분리하여 처리 */}
                        {event.split('\n').map((line, lineIndex) => {
                            const trimmedLine = line.trim();
                            const showDot = !isCategory('공연') && trimmedLine.startsWith('•');
                            const isDetailLine = trimmedLine.startsWith('•'); 
                            const isTitleOrNumber = lineIndex === 0 && !isDetailLine;
                            // 텍스트 내용: 점을 제거할지 여부 결정
                            const content = isDetailLine ? trimmedLine.substring(1).trim() : trimmedLine;

                            return (
                                <div 
                                    key={lineIndex}
                                    style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}
                                >
                                    
                                    {showDot && (
                                        <span style={{ color: '#E37AAD', marginRight: '5px', flexShrink: 0, }}>•</span>
                                     )}
                                     <span style={{ flex: 1 }}>
                                        {showDot ? trimmedLine.substring(1).trim() : trimmedLine}
                                     </span>
                                </div>
                                
                            )
                        })}
                    </D.InfoItem>
                ))
              )}

              {/* 메뉴/상품 섹션 렌더링 */}
              {(title === '메뉴') && hasData(data) && (
                  data.map((item, index) => (
                      <D.MenuItem key={index}> 
                          <D.MenuName>• {item.name || item}</D.MenuName> 
                          <D.MenuDash />
                          <D.MenuPrice>{item.price ? `${item.price.toLocaleString()}원` : ''}</D.MenuPrice>
                      </D.MenuItem>
                  ))
              )}

              {/* 참여방법 섹션 렌더링 */}
              {(title === '참여 방법') && hasData(data) && (
                  data.map((item, index) => (
                    <D.InfoItem key={index} style={{ alignItems: 'flex-start' }}>
                        {item}
                    </D.InfoItem>
                  ))
              )}

              {(title === '판매 상품') && hasData(data) && (
                data.map((item, index) => (
                    <D.MenuItem key={index}>
                        <D.MenuName>• {item.name || item}</D.MenuName>
                    </D.MenuItem>
                ))
              )}
              
              {/* 기타 섹션 (타임라인/유의사항/메뉴가 아닐 경우의 기본 렌더링 로직) */}
              {!(title === '타임라인' || title === '유의사항' || title === '메뉴' || title === '판매 상품' || title === '이벤트' || title === '참여 방법') && (
                  <D.InfoItem style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
                    {data}
                </D.InfoItem>
              )}

              

          </D.InfoBox>
      </D.InfoWrapper>
  );
    
    // --- 렌더링  ---
    
    return (
        <D.Wrapper>
            
            {timeline && renderSection('타임라인', timeline)}

            {notes && renderSection('유의사항', notes)}

            {participation && renderSection('참여 방법', participation)}

            {program && renderSection('프로그램 소개', program)}

            {event && renderSection('이벤트', event)}

            {isCategory('마켓') && products && renderSection('판매 상품', products)}
        
            {isCategory('주점', '푸드트럭') && hasData(menus) && renderSection('메뉴', menus)}

            {prizes && renderSection('상품 안내', prizes)}

            {somsomiGuide && renderSection('솜솜이 제작 방법', somsomiGuide)}

        </D.Wrapper>
    );
};

export default DetailInfo;