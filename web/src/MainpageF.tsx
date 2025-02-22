import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import JuiceComp from "./component/JuiceComp.tsx";

function MainpageF() {
  const navigate = useNavigate();

  function toGoNext() {
    return navigate("/step1");
  }
  function toGoLogin() {
    return navigate("/");
  }
  return (
    <div className="wrap flex h-full flex-col bg-white">
      <div className="h-[740px] w-full bg-[url(./img/bg_main.jpg)] bg-bottom pt-80">
        <div className="m-auto max-w-inner">
          <div className="mb-80 text-center">
            <h1 className="mb-15 text-27 font-bold text-green">
              정원님에게 음료를 선물하세요!
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
          </div>
        </div>
      </div>

      <div className="mt-25 mb-30">
        <div className="inner h-full">
          <button
            className="mb-12 h-55 w-full rounded-20 border border-solid border-button bg-button font-medium text-white"
            onClick={toGoNext}
          >
            음료 선물하기
          </button>
          <button
            className="h-55 w-full rounded-20 border border-solid border-button bg-white font-medium"
            onClick={toGoLogin}
          >
            나도 음료 선물받기
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainpageF;
