import ContentTitle from "../ContentTitle";

interface VoteRankingProps {
  title: string;
  subject: string;
}

export default function VoteRanking(props: VoteRankingProps) {
  return (
    <div
      className={`mx-auto w-inner pt-40 ${props.subject == "인기" ? "pb-100" : ""}`}
    >
      <div className="h-full w-full rounded-20 bg-white p-20">
        <ContentTitle title={props.title} subTitle={"25.03.05 기준"} />
        <div className="flex flex-col gap-10">
          <div className="flex h-120 w-full items-center justify-between rounded-20 bg-green p-20 text-white">
            <div className="flex items-center gap-15">
              <div className="h-25 w-25">
                <img
                  className="w-25 object-contain"
                  src="../../../../src/assets/img/icon/first-prize.png"
                  alt="1위"
                />
              </div>
              <div className="flex items-center gap-10">
                <div className="h-80 w-60">
                  <img
                    className="object-contian h-full w-full"
                    src="../../../../src/assets/img/example.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="mb-5 text-18 font-semibold">골든 선셋</h3>
                  <ul className="mb-10 flex gap-5">
                    <li className="text-14 font-normal">행복</li>
                    <li className="text-14 font-normal">|</li>
                    <li className="text-14 font-normal">건강</li>
                    <li className="text-14 font-normal">|</li>
                    <li className="text-14 font-normal">사랑</li>
                  </ul>
                  <div className="flex items-center gap-5">
                    <div className="h-25 w-25 rounded-full bg-indigo-100">
                      {/* <img src="" alt="프로필" /> */}
                    </div>
                    <h5 className="text-1 font-medium">이름</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="h-24 w-24">
                <img
                  className="w-24 object-contain"
                  src="../../../../src/assets/img/icon/red-heart.png"
                  alt="하트"
                />
              </div>
              <span className="text-18 font-bold">30</span>
            </div>
          </div>
          <div className="flex h-120 w-full items-center justify-between border-b-1 border-b-green30 p-20">
            <div className="flex items-center gap-15">
              <div className="h-25 w-25">
                <img
                  className="w-25 object-contain"
                  src="../../../../src/assets/img/icon/second-prize.png"
                  alt="1위"
                />
              </div>
              <div className="flex items-center gap-10">
                <div className="h-80 w-60">
                  <img
                    className="object-contian h-full w-full"
                    src="../../../../src/assets/img/example.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="mb-5 text-18 font-semibold">음료 이름</h3>
                  <ul className="mb-10 flex gap-5">
                    <li className="text-14 font-normal">행복</li>
                    <li className="text-14 font-normal">|</li>
                    <li className="text-14 font-normal">건강</li>
                    <li className="text-14 font-normal">|</li>
                    <li className="text-14 font-normal">사랑</li>
                  </ul>
                  <div className="flex items-center gap-5">
                    <div className="h-25 w-25 rounded-full bg-indigo-100">
                      {/* <img src="" alt="프로필" /> */}
                    </div>
                    <h5 className="text-1 font-medium">이름</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="h-24 w-24">
                <img
                  className="w-24 object-contain"
                  src="../../../../src/assets/img/icon/red-heart.png"
                  alt="하트"
                />
              </div>
              <span className="text-18 font-bold">00</span>
            </div>
          </div>
          <div className="flex h-120 w-full items-center justify-between p-20">
            <div className="flex items-center gap-15">
              <div className="h-25 w-25">
                <img
                  className="w-25 object-contain"
                  src="../../../../src/assets/img/icon/third-prize.png"
                  alt="1위"
                />
              </div>
              <div className="flex items-center gap-10">
                <div className="h-80 w-60">
                  <img
                    className="object-contian h-full w-full"
                    src="../../../../src/assets/img/example.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="mb-5 text-18 font-semibold">음료 이름</h3>
                  <ul className="mb-10 flex gap-5">
                    <li className="text-14 font-normal">행복</li>
                    <li className="text-14 font-normal">|</li>
                    <li className="text-14 font-normal">건강</li>
                    <li className="text-14 font-normal">|</li>
                    <li className="text-14 font-normal">사랑</li>
                  </ul>
                  <div className="flex items-center gap-5">
                    <div className="h-25 w-25 rounded-full bg-indigo-100">
                      {/* <img src="" alt="프로필" /> */}
                    </div>
                    <h5 className="text-1 font-medium">이름</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="h-24 w-24">
                <img
                  className="w-24 object-contain"
                  src="../../../../src/assets/img/icon/red-heart.png"
                  alt="하트"
                />
              </div>
              <span className="text-18 font-bold">00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
