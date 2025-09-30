import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./BoothMap.css";

function BoothMap({ images }) {
    if (!images || images.length === 0) {
        return (
            <div style={{ color: "#fff", textAlign: "center", marginTop: "20px" }}>
                표시할 이미지가 없습니다
            </div>
        );
    }

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            autoHeight={true}
            className="custom-swiper"
            style={{ width: "100%", height: "290px" }}
        >
            {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                    <img
                        src={img}
                        alt={`booth-map-${idx}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            paddingLeft: "5%",
                            paddingRight: "5%",
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default BoothMap;
