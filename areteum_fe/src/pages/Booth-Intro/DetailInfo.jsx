import React, { Fragment } from "react";
import * as D from "../../styles/StyledDescription"; 

const DetailInfo = ({ 
    category,         
    wating,     
    menus,        
    setMenus,    
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
    
    // 메뉴 항목 렌더링 함수
    const renderMenuItem = (item, isMenu = true) => (
        <D.MenuItem key={item.name || item}> 
            <D.MenuName>
                <D.Dote>•</D.Dote>
                {item.name || item}
            </D.MenuName> 
            
            {(item.category !== 'EVENT') && (
                <>
                    <D.MenuDash />
                    {/* 0원이면 기본 안주 */}
                    <D.MenuPrice>
                        {item.price > 0 
                            ? `${item.price.toLocaleString()}원` 
                            : item.price === 0
                            ? '기본 안주'
                            : ''}</D.MenuPrice>
                </>
            )}
        </D.MenuItem>
    );


    /**
     * 3. 정보 섹션을 렌더링하는 범용 컴포넌트
     */
    const renderSection = (title, data) => (
      <D.InfoWrapper>
          <D.SubTitle>{title}</D.SubTitle>
          <D.InfoBox>
              {/* 타임라인 섹션 렌더링 */}
              {title === '타임라인' && hasData(data) && (
                  data.map((item, index) => (
                      <D.MenuItem key={index}> 
                          <D.MenuName>
                            <D.Dote>•</D.Dote>
                            {item.name}
                          </D.MenuName> 
                          <D.MenuDash />
                          <D.MenuPrice>{item.timeRange}</D.MenuPrice>
                      </D.MenuItem>
                  ))
              )}

              {/* 유의사항 섹션 렌더링 */}
              {title === '유의사항' && hasData(data) && (
                  data.map((note, index) => (
                      <D.InfoItem key={index} style={{ alignItems: 'flex-start', display: "flex" }}>
                          <D.Dote>•</D.Dote>
                          {note}
                      </D.InfoItem>
                  ))
              )}

              {/* 안내 섹션 렌더링 */}
              {title === '현장 대기 및 웨이팅 안내' && hasData(data) && (
                  data.map((note, index) => (
                      <D.InfoItem key={index} style={{ alignItems: 'flex-start', display: "flex" }}>
                          <D.Dote>•</D.Dote> 
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
                                        <D.Dote>•</D.Dote>
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

              {/* 1. 메뉴 섹션 (카테고리별 그룹화) */}
              {title === '메뉴' && hasData(data) && (
  Object.entries(data.reduce((acc, item) => {
      const cat = item.category || '기타';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
  }, {})).map(([categoryName, items], catIndex) => (
      <div key={catIndex} style={{ width: '100%', marginBottom: '15px' }}>
          <Fragment key={catIndex}>
          <D.MenuSubTitle>
              {categoryName === 'ANJU' ? '안주' : categoryName === 'EVENT' ? '이벤트' : categoryName === 'DRINK' ? '음료' 
              : categoryName === 'ALCOHOL' ? "주류" 
              : categoryName === 'ETC' ? '기타'
              : categoryName
          }
          </D.MenuSubTitle>

          {/* 소제목 아래 항목 렌더링 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {items.map((item, itemIndex) => renderMenuItem(item, true))}
          </div>
          </Fragment>
      </div>
  ))
)}


{hasData(setMenus) && (
  <div>
    <D.MenuSubTitle>세트</D.MenuSubTitle>

    {setMenus.map((set, setIndex) => (
      <div key={setIndex} style={{ display: "flex", flexDirection: "column", marginBottom: "15px"}}>
        {/* 세트 메뉴 이름 */}
        <D.SetName>
            <D.Dote>•</D.Dote>
          {set.name}
        </D.SetName>

        {/* 세트 메뉴 variants */}
        {hasData(set.variants) && set.variants.map((variant, varIndex) => (
          <Fragment key={varIndex}>
            <D.MenuItem>
              <D.SetMenuName>
                {variant.items.join(' + ')}
              </D.SetMenuName>
              <D.MenuDash />
              <D.MenuPrice>
                {variant.price.toLocaleString()}원
              </D.MenuPrice>
            </D.MenuItem>

            {/* ✅ variant.note 있으면 메뉴 바로 아래 표시 */}
            {variant.note && (
              <D.Note>
                * {variant.note}
              </D.Note>
            )}
          </Fragment>
        ))}
      </div>
    ))}
  </div>
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
                        <D.MenuName>
                        <span style={{ color: '#E37AAD', marginRight: '5px', flexShrink: 0, }}>•</span>
                        {item.name}
                        </D.MenuName>
                    </D.MenuItem>
                ))
              )}
              
              {/* 기타 섹션 (타임라인/유의사항/메뉴가 아닐 경우의 기본 렌더링 로직) */}
              {!(title === '타임라인' || title === '유의사항' || title === '메뉴' || title === '판매 상품' 
              || title === '이벤트' || title === '참여 방법'
              || title === '현장 대기 및 웨이팅 안내') && (
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

            {wating && renderSection('현장 대기 및 웨이팅 안내', wating)}

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