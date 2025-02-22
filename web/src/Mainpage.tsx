import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState } from "react";
import JuiceComp from "./component/JuiceComp.tsx";

function Mainpage() {
  const [close, setClose] = useState(true);

  function closeAll() {
    setClose(!close);
  }

  return (
    <div
      className={`${close ? "wrap relative flex h-full w-full flex-col bg-white" : "wrap relative flex h-[100vh] w-full flex-col bg-white"}`}
    >
      <div className="h-[740px] w-full bg-[url(./img/bg_main.jpg)] bg-bottom pt-80">
        <div className="m-auto max-w-inner">
          <div className="mb-80 text-center">
            <h1 className="mb-15 text-30 font-bold text-green">
              정원님 안녕하세요!
            </h1>
            <h2 className="text-18 font-medium">
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

      <div className="mt-25 mb-30">
        <div className="inner h-full">
          <button
            className="mb-12 h-55 w-full rounded-20 border border-solid border-button bg-button font-medium text-white"
            onClick={closeAll}
          >
            모든 음료 보기
          </button>
          <div className="flex gap-10">
            <button className="h-55 w-1/2 rounded-20 border border-solid border-button bg-white font-medium">
              커뮤니티
            </button>
            <button className="h-55 w-1/2 rounded-20 border border-solid border-button bg-white font-medium">
              공유하기
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 z-99 h-full w-full bg-btn80 backdrop-blur-[3px] ${close ? "hidden" : "block"}`}
      >
        <div className="relative h-full w-full overflow-hidden overflow-y-scroll px-30">
          <div
            className="fixed top-30 right-30 flex w-full justify-end"
            onClick={closeAll}
          >
            <img src="./src/img/close.png" alt="" />
          </div>

          <div className="mt-100 h-full overflow-hidden bg-amber-300">
            <div className="mb-30 h-200 w-full rounded-10 border-1 border-white"></div>
            <div className="mb-30 h-200 w-full rounded-10 border-1 border-white"></div>
            <div className="mb-30 h-200 w-full rounded-10 border-1 border-white"></div>
            <div className="mb-30 h-200 w-full rounded-10 border-1 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
