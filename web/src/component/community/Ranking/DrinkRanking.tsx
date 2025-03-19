import ContentTitle from "../ContentTitle";

export default function DrinkingRanking() {
  return (
    <div className="mx-auto w-inner pt-30">
      <div className="h-full w-full rounded-20 bg-white p-20">
        <ContentTitle
          title={"🎁 가장 많은 음료를 받은 사람은!"}
          subTitle={"오후 12시 기준"}
        />
        <div>
          <div className="mb-10 grid grid-cols-3 items-end gap-14">
            <div className="relative flex h-140 w-full items-center justify-center rounded-10 bg-green">
              <div className="absolute top-10 left-5 h-24 w-24">
                <img
                  className="w-24 object-contain"
                  src="../../src/assets/img/icon/second-prize.png"
                  alt="1등"
                />
              </div>
              <div className="content">
                <div className="mb-15 h-45 w-45 rounded-full bg-white">
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="text-1 font-mediumtext-1 text-center font-medium text-white">
                  <h3 className="mb-10">이름</h3>
                  <p>00잔</p>
                </div>
              </div>
            </div>
            <div className="relative flex h-150 w-full items-center justify-center rounded-10 bg-green">
              <div className="absolute top-10 left-5 h-24 w-24">
                <img
                  className="w-24 object-contain"
                  src="../../src/assets/img/icon/first-prize.png"
                  alt="1등"
                />
              </div>
              <div className="content">
                <div className="mb-15 h-45 w-45 rounded-full bg-white">
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="text-1 font-mediumtext-1 text-center font-medium text-white">
                  <h3 className="mb-10">이름</h3>
                  <p>00잔</p>
                </div>
              </div>
            </div>
            <div className="relative flex h-140 w-full items-center justify-center rounded-10 bg-green">
              <div className="absolute top-10 left-5 h-24 w-24">
                <img
                  className="w-24 object-contain"
                  src="../../src/assets/img/icon/third-prize.png"
                  alt="1등"
                />
              </div>
              <div className="content">
                <div className="mb-15 h-45 w-45 rounded-full bg-white">
                  {/* <img src="" alt="" /> */}
                </div>
                <div className="text-1 font-mediumtext-1 text-center font-medium text-white">
                  <h3 className="mb-10">이름</h3>
                  <p>00잔</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="borer-green30 flex h-60 w-full items-center justify-between border-b-1 border-b-green30 px-20">
              <div className="flex items-center gap-15">
                <h4 className="w-30 text-22 font-medium">4</h4>
                <div className="h-35 w-35 rounded-full bg-indigo-100">
                  {/* <img src="" alt="프로필" /> */}
                </div>
                <h5 className="text-1 font-medium">이름</h5>
              </div>
              <p className="text-1 font-medium">00잔</p>
            </div>
            <div className="borer-green30 flex h-60 w-full items-center justify-between border-b-1 border-b-green30 px-20">
              <div className="flex items-center gap-15">
                <h4 className="w-30 text-22 font-medium">5</h4>
                <div className="h-35 w-35 rounded-full bg-indigo-100">
                  {/* <img src="" alt="프로필" /> */}
                </div>
                <h5 className="text-1 font-medium">이름</h5>
              </div>
              <p className="text-1 font-medium">00잔</p>
            </div>
            <div className="borer-green30 flex h-60 w-full items-center justify-between px-20">
              <div className="flex items-center gap-15">
                <h4 className="w-30 text-22 font-medium">6</h4>
                <div className="h-35 w-35 rounded-full bg-indigo-100">
                  {/* <img src="" alt="프로필" /> */}
                </div>
                <h5 className="text-1 font-medium">이름</h5>
              </div>
              <p className="text-1 font-medium">00잔</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
