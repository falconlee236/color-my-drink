import { useState } from "react";
import JuiceSlide from "../component/main-shared/JuiceSlide.tsx";

export default function Mainpage() {
  const [close, setClose] = useState(true);

  const openModals = () => setClose(!close);

  return (
    <div
      className={`${close ? "wrap relative flex h-full w-full flex-col bg-white" : "wrap relative flex h-[100vh] w-full flex-col bg-white"}`}
    >
      <div className="h-[740px] w-full bg-[url(./assets/img/bg_main.jpg)] bg-bottom pt-80">
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
            <JuiceSlide totalJuice={15} />
          </div>
        </div>
      </div>

      <div className="mt-30 mb-40">
        <div className="inner h-full">
          <button
            className="mb-12 h-55 w-full rounded-20 border border-solid border-button bg-button font-medium text-white"
            onClick={openModals}
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
            onClick={openModals}
          >
            <img src="./src/assets/img/close.png" alt="닫기" />
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
