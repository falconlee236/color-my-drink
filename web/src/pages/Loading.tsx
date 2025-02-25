import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Result() {
  const navigate = useNavigate();

  const [start, setStart] = useState(false);

  function delay() {
    setStart(true);
  }

  function next() {
    navigate("/result");
  }

  useEffect(() => {
    setTimeout(delay, 800);
    setTimeout(next, 6300);
  });

  return (
    <div className="wrap bg-bg">
      <div className="inner flex h-full flex-col items-center justify-center gap-50">
        <h3 className="text-[22px] font-bold">음료 만드는 중...</h3>
        <div className="relative h-10 w-full overflow-hidden rounded-10">
          <div className="absolute h-10 w-full rounded-full bg-white"></div>
          <div
            className={` ${start ? "absolute left-0 h-10 w-full rounded-full bg-green transition-discrete duration-[5s]" : "absolute -left-200 h-10 w-1/2 rounded-full bg-green"}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Result;
