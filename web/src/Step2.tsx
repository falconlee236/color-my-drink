import StepTitle from "./component/StepTitle";
import FixedBtn from "./component/FixedBtn";
import { useEffect, useState } from "react";

function Step2() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [checkedList, setCheckedList] = useState<string[] | null>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOpen, setSelectedOpen] = useState<string | null>(null);
  const [alarm, setAlarm] = useState(false);
  const [close, setClose] = useState(false);

  const SIZE_MAP = [
    { name: "Short", index: "3-1" },
    { name: "Tall", index: "3-2" },
    { name: "Grande", index: "3-3" },
    { name: "Venti", index: "3-4" },
  ];

  const INGREDIENT_MAP = [
    { name: "행복", index: "4-1", img: "../src/img/ingredient/1.png" },
    { name: "건강", index: "4-2", img: "../src/img/ingredient/2.png" },
    { name: "성취", index: "4-3", img: "../src/img/ingredient/3.png" },
    { name: "금전", index: "4-4", img: "../src/img/ingredient/4.png" },
    { name: "행운", index: "4-5", img: "../src/img/ingredient/5.png" },
    { name: "사랑", index: "4-6", img: "../src/img/ingredient/6.png" },
    { name: "학업", index: "4-7", img: "../src/img/ingredient/7.png" },
    { name: "온정", index: "4-8", img: "../src/img/ingredient/8.png" },
  ];

  const OPEN_MAP = [
    { name: "전체공개", index: "5-1" },
    { name: "비공개", index: "5-2" },
  ];

  function onClick3(index: string) {
    setSelectedSize(index);
  }

  function checkedItem(value: string, isChecked: boolean) {
    if (isChecked) {
      setCheckedList((prev) => [...(prev || []), value]);
    }

    if (!isChecked && checkedList?.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    }
  }

  function onClick4(e: React.ChangeEvent<HTMLInputElement>, value: string) {
    setIsChecked(!isChecked);
    checkedItem(value, e.target.checked);
  }

  function onClick5(index: string) {
    setSelectedOpen(index);
  }

  function onClose() {
    setClose(!close);
  }

  useEffect(() => {
    if (checkedList != null) {
      if (checkedList.length > 3) {
        onClose();
        setAlarm(true);
        setCheckedList(checkedList.slice(0, 3));
      }
    }
  }, [checkedList]);

  const sizeList = SIZE_MAP.map((btn) => (
    <button
      className={`${btn.index === selectedSize ? "bg-green h-55 w-full rounded-full text-[18px] font-semibold text-white" : "bg-ccc25 text-888 h-55 w-full rounded-full text-[18px]"}`}
      onClick={() => {
        onClick3(btn.index);
      }}
    >
      {btn.name}
    </button>
  ));

  const ingredientList = INGREDIENT_MAP.map((btn) => {
    return (
      <li>
        <input
          type="checkbox"
          id={btn.index}
          className="peer hidden"
          checked={checkedList?.includes(btn.index)}
          onChange={(e) => {
            onClick4(e, btn.index);
          }}
        />
        <label
          htmlFor={btn.index}
          className="text-888 border-ccc80 rounded-10 peer-checked:border-green peer-checked:text-333 flex h-100 w-full flex-col items-center justify-center border-[2px] border-solid text-[18px] peer-checked:font-medium"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="">{btn.name}</div>
            <img src={btn.img} alt="ingredient" className="mt-10 h-30 w-55" />
          </div>
        </label>
      </li>
    );
  });

  const openList = OPEN_MAP.map((btn) => (
    <button
      className={`${btn.index === selectedOpen ? "bg-green h-55 w-full rounded-full text-[18px] font-semibold text-white" : "bg-ccc25 text-888 h-55 w-full rounded-full text-[18px]"}`}
      onClick={() => {
        onClick5(btn.index);
      }}
    >
      {btn.name}
    </button>
  ));

  return (
    <div className="wrap h-full bg-bg relative flex flex-col">
      <StepTitle />
      <div className="h-full w-full rounded-t-[20px] bg-white py-30">
        <div className="inner relative m-auto flex h-[100%] flex-col items-center">
          <div className="mb-40 w-full">
            <h4 className="mb-15 text-[22px] font-bold">음료 사이즈 선택</h4>
            <div className="grid grid-cols-2 gap-[14px]">{sizeList}</div>
          </div>
          <div className="mb-40 w-full">
            <h4 className="mb-15">
              <span className="text-[22px] font-bold">재료 선택</span>
              <span className="text-555 ml-10 text-[16px] font-medium">
                *최대 3개까지 가능
              </span>
            </h4>
            <ul className="grid grid-cols-4 gap-[14px]">{ingredientList}</ul>
          </div>
          <div className="w-full">
            <h4 className="mb-15 text-[22px] font-bold">공개 여부 선택</h4>
            <div className="grid grid-cols-2 gap-[14px]">{openList}</div>
          </div>

          <FixedBtn step="step2" word="다음" />
        </div>
      </div>
      <div
        className={`${alarm ? (close ? "absolute -top-[1000px] -left-[1000px]" : "rounded-10 bg-33380 absolute h-full w-full text-white backdrop-blur-xs duration-[0.5s]") : "absolute -top-[1000px] -left-[1000px]"}`}
      >
        <div className="rounded-10 text-333 relative top-1/2 left-1/2 flex h-150 w-[85%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[40px] bg-white">
          <h4 className="mt-10 text-[20px] font-semibold">
            재료는 <span className="text-red-500">최대 3개</span>까지 선택
            가능합니다.
          </h4>
          <button onClick={onClose} className="text-888 font-medium">
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
