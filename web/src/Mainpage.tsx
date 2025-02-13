import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import JuiceComp from "./component/JuiceComp.tsx";

function Mainpage() {
  const [close, setClose] = useState(true);

  function closeAll() {
    setClose(!close);
  }

  return (
    <div className="wrap relative flex h-full w-full flex-col bg-white">
      <div className="h-[740px] w-full bg-[url(./img/bg_main.jpg)] bg-bottom pt-80">
        <div className="max-w-inner m-auto">
          <div className="mb-80 text-center">
            <h1 className="text-green mb-10 text-[32px] font-bold">
              정원님 안녕하세요!
            </h1>
            <h2 className="text-[18px] font-medium">
              총 4개의 음료를 선물 받았습니다.
            </h2>
          </div>
          <div className="juice h-[340px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                  <div className="mb-18 flex justify-center gap-18">
                    <JuiceComp />
                    <JuiceComp />
                    <JuiceComp />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="mt-30 mb-50">
        <div className="inner h-full">
          <button className="border-button rounded-20 bg-button mb-[12px] h-55 w-full border border-solid font-medium text-white" onClick={closeAll}>
            모든 음료 보기
          </button>
          <div className="flex gap-10">
            <button className="border-button rounded-20 h-55 w-1/2 border border-solid bg-white font-medium">
              커뮤니티
            </button>
            <button className="border-button rounded-20 h-55 w-1/2 border border-solid bg-white font-medium">
              공유하기
            </button>
          </div>
        </div>
      </div>

      <div
        className={`bg-btn80 absolute top-0 left-0 z-99 h-[100vh] w-full backdrop-blur-[3px] ${close ? "hidden" : "block"}`}
      >
        <div className="relative h-full w-full px-30">
          <div
            className="fixed top-30 right-30 flex w-full justify-end"
            onClick={closeAll}
          >
            <img src="./src/img/close.png" alt="" />
          </div>

          <div className="mt-100 h-full overflow-scroll">
            <div className="rounded-10 mb-30 h-200 w-full border-1 border-white"></div>
            <div className="rounded-10 mb-30 h-200 w-full border-1 border-white"></div>
            <div className="rounded-10 mb-30 h-200 w-full border-1 border-white"></div>
            <div className="rounded-10 mb-30 h-200 w-full border-1 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
