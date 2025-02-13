import { useNavigate } from "react-router";

function Result() {
  const navigate = useNavigate();

  function toMainPage() {
    return navigate("/mainpageF");
  }

  return (
    <div className="wrap bg-green h-full pb-50">
      <div className="bg-bg h-600 w-full rounded-b-full">
        <div className="flex h-full flex-col items-center gap-70">
          <h2 className="mt-80 text-[30px] font-bold">음료가 완성됐어요!</h2>
          <div className="h-300 w-300">
            <img
              className="h-full w-full object-contain"
              src="./src/img/example.png"
              alt="음료"
            />
          </div>
        </div>
      </div>
      <div className="inner flex flex-col items-center text-white">
        <h4 className="mt-40 text-[18px] font-semibold">베어드님의 선물</h4>
        <h2 className="mt-15 text-[30px] font-bold">골든 하모니</h2>
        <div className="mt-15 h-18 w-18">
          <img
            className="h-full w-full object-contain"
            src="./src/img/hot.png"
            alt="온도"
          />
        </div>
        <div className="mt-15 flex gap-[7px]">
          <span>행복</span>
          <span>|</span>
          <span>건강</span>
          <span>|</span>
          <span>행운</span>
        </div>
      </div>
      <div className="inner mt-50">
        <button
          className="bg-button rounded-20 h-55 w-full font-medium text-white"
          onClick={toMainPage}
        >
          처음으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default Result;
