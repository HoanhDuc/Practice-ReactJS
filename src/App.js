import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./utils/fakeData.js";
import "swiper/css";

function App() {
  const sliderRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    sliderRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  return (
    <div className="app">
      <Swiper
        onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
        ref={sliderRef}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div class="flex items-center p-4 w-2/3 mx-auto shadow-lg">
                <p>{item.description_text}</p>
                <img src={item.description_image} alt="" width={250} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div class="flex gap-3">
        <button
          onClick={() => setSwiperIndex(swiperIndex - 1)}
          disabled={swiperIndex === 0}
        >
          Pre
        </button>
        {data.map((item, index) => {
          return (
            <img
              key={index}
              class={`rounded-full cursor-pointer ${
                index === swiperIndex ? "border-2 border-blue-400" : ""
              }`}
              src={item.user_avatar}
              alt=""
              width={40}
              height={40}
              onClick={() => setSwiperIndex(index)}
            />
          );
        })}
        <button
          onClick={() => setSwiperIndex(swiperIndex + 1)}
          disabled={swiperIndex === data.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
