import { useState } from "react";
import JuiceSlide from "../component/main-shared/JuiceSlide.tsx";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import {
  updateClickModal,
  valueClickModal,
} from "../store/features/main-sharedPage/clickModalSlice.ts";

export default function Mainpage() {
  const [showMessage, setShowMessage] = useState(false);

  const moveModalPage = () => setShowMessage(!showMessage);

  const dispatch = useAppDispatch();
  const currentClickModal = useAppSelector(valueClickModal);
  const openCloseModal = () => {
    dispatch(updateClickModal(!currentClickModal.clickModal));
  };

  return (
    <div className="wrap relative flex h-full flex-col bg-white">
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
          <button className="mb-12 h-55 w-full rounded-20 border border-solid border-button bg-button font-medium text-white">
            MY 음료 데이터 보기
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

      <div className={`${currentClickModal.clickModal ? "block" : "hidden"}`}>
        <div className="absolute top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center gap-50 bg-fff60 pt-50 backdrop-blur-[3px]">
          <div
            className={`front-modal relative h-430 w-inner rounded-tl-185 rounded-tr-40 rounded-b-40 bg-green px-40 pt-160 ${showMessage ? "hidden" : "block"}`}
          >
            <div className="absolute -top-120 right-10 h-250 w-180">
              <img
                className="h-full w-full object-contain"
                src="../../src/assets/img/example.png"
                alt=""
              />
            </div>
            <div className="mb-20 text-white">
              <p className="mb-15 text-18 font-semibold">
                베어드님의 음료 선물!
              </p>
              <h3 className="mb-30 text-30 font-bold">골든 하모니</h3>
              <ul>
                <li className="mb-15 w-180 border-b-1 border-solid border-white pb-10">
                  <span className="text-1 inline-block w-60 font-medium">
                    온도
                  </span>
                  <span>뜨겁게</span>
                </li>
                <li className="mb-15 w-180 border-b-1 border-solid border-white pb-10">
                  <span className="text-1 inline-block w-60 font-medium">
                    사이즈
                  </span>
                  <span>Tall</span>
                </li>
                <li>
                  <span className="text-1 inline-block w-60 font-medium">
                    재료
                  </span>
                  <span>행복, 건강, 행운</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <button className="flex gap-5" onClick={moveModalPage}>
                <div className="h-30 w-30">
                  <img
                    className="w-30 object-contain"
                    src="../../src/assets/img/icon/message.png"
                    alt="메세지 보기"
                  />
                </div>
                <div className="h-24 w-24">
                  <img
                    className="w-24 object-contain"
                    src="../../src/assets/img/icon/right.png"
                    alt="메세지 보기"
                  />
                </div>
              </button>
            </div>
          </div>
          <div
            className={`back-modal relative h-430 w-inner rounded-tl-185 rounded-tr-40 rounded-b-40 bg-green px-40 pt-160 ${showMessage ? "block" : "hidden"}`}
          >
            <div className="absolute -top-120 right-10 h-250 w-180">
              <img
                className="h-full w-full object-contain"
                src="../../src/assets/img/example.png"
                alt=""
              />
            </div>
            <div className="mb-20 text-white">
              <p className="mb-15 text-18 font-semibold">
                베어드님의 음료 선물!
              </p>
              <p className="text-1 leading-7">
                안녕하세요, 이 문장은 한글로 정확히 100자를 채우기 위해 작성된
                예제입니다. 한글은 글자 하나당 2바이트로 저장됩니다. 따라서 이
                문장은 100자이며, UTF-8 기준으로 약 200바이트에 해당합니다.
                추가로 확인해보세요.
              </p>
            </div>
            <div className="flex justify-start">
              <button
                className="flex items-center gap-5"
                onClick={moveModalPage}
              >
                <div className="h-30 w-30">
                  <img
                    className="w-30 object-contain"
                    src="../../src/assets/img/icon/left.png"
                    alt="음료 설명 보기"
                  />
                </div>
                <div className="h-24 w-24">
                  <img
                    className="w-24 object-contain"
                    src="../../src/assets/img/icon/detail.png"
                    alt="음료 설명 보기"
                  />
                </div>
              </button>
            </div>
          </div>
          <button
            className="flex h-55 w-55 items-center justify-center rounded-full bg-green"
            onClick={openCloseModal}
          >
            <div className="h-25 w-25">
              <img
                className="w-25 object-contain"
                src="../../src/assets/img/icon/close.png"
                alt="닫기"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
