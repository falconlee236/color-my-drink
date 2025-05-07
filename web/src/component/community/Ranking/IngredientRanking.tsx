import ContentTitle from "../ContentTitle";

export default function IngredientRanking() {
  return (
    <div className="mx-auto w-inner pt-40">
      <div className="h-full w-full rounded-20 bg-white p-20">
        <ContentTitle
          title={"🍹 가장 인기 많은 재료는!"}
          subTitle={"오후 12시 기준"}
        />
        <div>
          <div className="mb-15 w-full rounded-20 bg-green p-20 text-white">
            <div className="mb-20 h-30 w-30">
              <img
                className="w-30 object-contain"
                src="../../../src/assets/img/icon/first-prize.png"
                alt="1위"
              />
            </div>
            <h3 className="mb-15 flex items-center gap-10 text-18 font-medium">
              <b className="text-24 font-semibold">행복</b>
              <img
                className="w-55"
                src="../../../src/assets/img/ingredient/1.png"
                alt="행복"
              />
              이 가장 인기 있어요!
            </h3>
            <h4 className="text-18 font-medium">총 620번 선택됐어요.</h4>
          </div>

          <div className="flex flex-col gap-10">
            <div className="borer-green30 flex h-60 w-full items-center justify-between border-b-1 border-b-green30 pr-20 pl-15">
              <div className="flex items-center gap-15">
                {/* <h4 className="w-30 text-22 font-medium">2</h4> */}
                <div className="h-30 w-30">
                  <img
                    className="w-30 object-contain"
                    src="../../../src/assets/img/icon/second-prize.png"
                    alt="2위위"
                  />
                </div>
                <div className="h-20 w-[37px]">
                  <img
                    className="w-[37px] object-contain"
                    src="../../../src/assets/img/ingredient/1.png"
                    alt="재료"
                  />
                </div>
                <h5 className="text-1 font-medium">재료</h5>
              </div>
              <p className="text-1 font-medium">00%</p>
            </div>
            <div className="borer-green30 flex h-60 w-full items-center justify-between border-b-1 border-b-green30 pr-20 pl-15">
              <div className="flex items-center gap-15">
                {/* <h4 className="w-30 text-22 font-medium">2</h4> */}
                <div className="h-30 w-30">
                  <img
                    className="w-30 object-contain"
                    src="../../../src/assets/img/icon/third-prize.png"
                    alt="3위"
                  />
                </div>
                <div className="h-20 w-[37px]">
                  <img
                    className="w-[37px] object-contain"
                    src="../../../src/assets/img/ingredient/1.png"
                    alt="재료"
                  />
                </div>
                <h5 className="text-1 font-medium">재료</h5>
              </div>
              <p className="text-1 font-medium">00%</p>
            </div>
            <div className="borer-green30 flex h-60 w-full items-center justify-between border-b-1 border-b-green30 px-20">
              <div className="flex items-center gap-15">
                <h4 className="w-30 text-22 font-medium">4</h4>
                <div className="h-20 w-[37px]">
                  <img
                    className="w-[37px] object-contain"
                    src="../../../src/assets/img/ingredient/1.png"
                    alt="재료"
                  />
                </div>
                <h5 className="text-1 font-medium">재료</h5>
              </div>
              <p className="text-1 font-medium">00%</p>
            </div>
            <div className="borer-green30 flex h-60 w-full items-center justify-between px-20">
              <div className="flex items-center gap-15">
                <h4 className="w-30 text-22 font-medium">5</h4>
                <div className="h-20 w-[37px]">
                  <img
                    className="w-[37px] object-contain"
                    src="../../../src/assets/img/ingredient/1.png"
                    alt="재료"
                  />
                </div>
                <h5 className="text-1 font-medium">재료</h5>
              </div>
              <p className="text-1 font-medium">00%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
