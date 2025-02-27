import { useNavigate } from "react-router";

export default function Result() {
  const navigate = useNavigate();

  const toGoSharedpage = () => navigate("/sharedpage");

  return (
    <div className="wrap h-full bg-green">
      <div className="h-600 w-full rounded-b-full bg-bg">
        <div className="h-full">
          <h2 className="mb-70 pt-80 text-center text-30 font-bold">
            음료가 완성됐어요!
          </h2>
          <div className="mx-auto h-300 w-300">
            <img
              className="h-full w-full object-contain"
              src="./src/assets/img/example.png"
              alt="음료"
            />
          </div>
        </div>
      </div>
      <div className="inner text-center text-white">
        <h4 className="mt-40 text-20 font-semibold">베어드님의 선물</h4>
        <h3 className="mt-20 text-32 font-bold">골든 하모니</h3>
        <div className="mx-auto mt-20 h-20 w-20">
          <img
            className="h-full w-full object-contain"
            src="./src/assets/img/icon/hot.png"
            alt="온도"
          />
        </div>
        <h2 className="mt-15 text-18">재료1 | 재료2 | 재료3</h2>
      </div>
      <div className="inner pt-40 pb-50">
        <button
          className="h-55 w-full rounded-20 bg-button font-medium text-white"
          onClick={toGoSharedpage}
        >
          처음으로 돌아가기
        </button>
      </div>
    </div>
  );
}
