import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  updateClickModal,
  valueClickModal,
} from "../../store/features/main-sharedPage/clickModalSlice";

export default function JuiceDetailModal() {
  const [showMessage, setShowMessage] = useState(false);
  const moveModalPage = () => setShowMessage(!showMessage);

  const dispatch = useAppDispatch();
  const currentClickModal = useAppSelector(valueClickModal);
  const openCloseModal = () => {
    dispatch(updateClickModal(!currentClickModal.clickModal));
  };

  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center gap-50 bg-fff60 pt-50 backdrop-blur-[3px]">
      <div
        className={`front-modal relative h-430 w-innerModal rounded-tl-185 rounded-tr-40 rounded-b-40 bg-green px-40 pt-160 ${showMessage ? "hidden" : "block"}`}
      >
        <div className="absolute -top-120 right-10 h-250 w-180">
          <img
            className="h-full w-full object-contain"
            src="../../src/assets/img/example.png"
            alt=""
          />
        </div>
        <div className="h-210 text-white">
          <p className="mb-15 text-18 font-semibold">베어드님의 음료 선물!</p>
          <h3 className="mb-25 text-30 font-bold">골든 하모니</h3>
          <ul>
            <li className="mb-15 w-180 border-b-1 border-solid border-white pb-10">
              <span className="text-1 inline-block w-60 font-medium">온도</span>
              <span>뜨겁게</span>
            </li>
            <li className="mb-15 w-180 border-b-1 border-solid border-white pb-10">
              <span className="text-1 inline-block w-60 font-medium">
                사이즈
              </span>
              <span>Tall</span>
            </li>
            <li>
              <span className="text-1 inline-block w-60 font-medium">재료</span>
              <span>행복, 건강, 행운</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <button
            className="flex cursor-pointer items-center gap-5 duration-300 ease-in-out hover:translate-x-[7px]"
            onClick={moveModalPage}
          >
            <div className="h-20 w-20">
              <img
                className="w-20 object-contain"
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
        className={`back-modal relative h-430 w-innerModal rounded-tl-185 rounded-tr-40 rounded-b-40 bg-green px-40 pt-160 ${showMessage ? "block" : "hidden"}`}
      >
        <div className="absolute -top-120 right-10 h-250 w-180">
          <img
            className="h-full w-full object-contain"
            src="../../src/assets/img/example.png"
            alt=""
          />
        </div>
        <div className="h-210 text-white">
          <p className="mb-15 text-18 font-semibold">베어드님의 음료 선물!</p>
          <p className="text-1 leading-7">
            안녕하세요, 이 문장은 한글로 정확히 100자를 채우기 위해 작성된
            예제입니다. 한글은 글자 하나당 2바이트로 저장됩니다. 따라서 이
            문장은 100자이며, UTF-8 기준으로 약 200바이트에 해당합니다. 추가로
            확인해보세요.
          </p>
        </div>
        <div className="flex justify-start">
          <button
            className="flex cursor-pointer items-center gap-5 duration-300 hover:-translate-x-[7px]"
            onClick={moveModalPage}
          >
            <div className="h-24 w-24">
              <img
                className="w-24 object-contain"
                src="../../src/assets/img/icon/left.png"
                alt="음료 설명 보기"
              />
            </div>
            <div className="h-20 w-20">
              <img
                className="w-20 object-contain"
                src="../../src/assets/img/icon/detail.png"
                alt="음료 설명 보기"
              />
            </div>
          </button>
        </div>
      </div>
      <button
        className="flex h-55 w-55 cursor-pointer items-center justify-center rounded-full bg-green duration-300 hover:bg-[#253a32]"
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
  );
}
