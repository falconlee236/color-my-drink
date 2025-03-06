import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Result() {
  const navigate = useNavigate();

  const [startLoading, setStartLoading] = useState(false);

  const delay = () => setStartLoading(true);

  const toGoNext = () => navigate("/result");

  useEffect(() => {
    setTimeout(delay, 750);
    setTimeout(toGoNext, 6000);
  });

  return (
    <div className="wrap bg-bg">
      <div className="inner flex h-full flex-col items-center justify-center gap-50">
        <h3 className="text-24 font-bold">음료 만드는 중...</h3>
        <div className="relative h-10 w-full overflow-hidden rounded-10">
          <div className="absolute h-10 w-full rounded-full bg-white"></div>
          <div
            className={`absolute h-10 rounded-full bg-green ${startLoading ? "left-0 w-full transition-discrete duration-[5s]" : "-left-200 w-1/2"}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
