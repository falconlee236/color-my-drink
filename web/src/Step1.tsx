import { useState } from "react";
import FixedBtn from "./component/FixedBtn";
import StepTitle from "./component/StepTitle";

function Step1() {
  const TEMP_MAP = [
    { name: "뜨겁게", index: "1-1" },
    { name: "따뜻하게", index: "1-2" },
    { name: "차갑게", index: "1-3" },
  ];

  const GLASS_MAP = [
    { index: "2-1", url: "../src/img/cup1.png" },
    { index: "2-2", url: "../src/img/cup2.png" },
    { index: "2-3", url: "../src/img/cup3.png" },
    { index: "2-4", url: "../src/img/cup4.png" },
  ];

  const [slectedTemp, setSelectedTemp] = useState<string | null>(null);
  const [slectedGlass, setSelectedGlass] = useState<string | null>(null);

  function onClick1(index: string) {
    setSelectedTemp(index);
  }

  function onClick2(index: string) {
    setSelectedGlass(index);
  }

  const tempList = TEMP_MAP.map((btn) => (
    <button
      type="button"
      key={btn.index}
      className={`${slectedTemp === btn.index ? "bg-green h-55 w-full rounded-full text-[18px] font-semibold text-white" : "bg-ccc25 text-888 h-55 w-full rounded-full text-[18px]"}`}
      onClick={() => {
        onClick1(btn.index);
      }}
    >
      {btn.name}
    </button>
  ));

  const glassList = GLASS_MAP.map((btn) => (
    <button
      type="button"
      key={btn.index}
      className={`${slectedGlass === btn.index ? "border-green bg-green20 rounded-10 max-h-200 w-full border-[2px] border-solid" : "border-ddd rounded-10 max-h-200 w-full border-[2px] border-solid"}`}
      onClick={() => {
        onClick2(btn.index);
      }}
    >
      <img className="h-full w-full object-contain" src={btn.url} alt="cup" />
    </button>
  ));

  return (
    <div className="wrap h-full bg-bg flex flex-col">
      <StepTitle />
      <div className="h-full w-full rounded-t-[20px] bg-white py-30">
        <div className="inner relative m-auto flex h-[100%] flex-col items-center">
          <div className="mb-40 w-full">
            <h4 className="mb-15 text-[22px] font-bold">온도 선택</h4>
            <div className="grid grid-cols-3 gap-[5px]">{tempList}</div>
          </div>
          <div className="w-full">
            <h4 className="mb-15 text-[22px] font-bold">음료잔 선택</h4>
            <div className="grid grid-cols-2 gap-[14px]">{glassList}</div>
          </div>
          <FixedBtn step="step1" word="다음" />
        </div>
      </div>
    </div>
  );
}

export default Step1;
