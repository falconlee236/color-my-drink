import JuiceSlide from "../component/main-shared/JuiceSlide.tsx";
import { useAppSelector } from "../store/hooks.ts";
import { valueClickModal } from "../store/features/main-sharedPage/clickModalSlice.ts";
import JuiceDetailModal from "../component/main-shared/JuiceDetailModal.tsx";

export default function Mainpage() {
  const currentClickModal = useAppSelector(valueClickModal);

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
        <JuiceDetailModal />
      </div>
    </div>
  );
}
