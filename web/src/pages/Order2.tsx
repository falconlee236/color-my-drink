import OrderTitle from "../component/orderpage/OrderTitle";
import PaginationBtn from "../component/orderpage/PaginationBtn";
import { useEffect, useState } from "react";

export default function Order2() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<string[]>(
    JSON.parse(sessionStorage.getItem("selectedIngredient") || "[]"),
  );
  const [isChecked, setIsChecked] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState<string | null>(null);
  const [alarm, setAlarm] = useState(false);
  const [toggleAlarm, setToggleAlarm] = useState(false);

  const SIZE_MAP = [
    { name: "Short", index: "3-1" },
    { name: "Tall", index: "3-2" },
    { name: "Grande", index: "3-3" },
    { name: "Venti", index: "3-4" },
  ];

  const INGREDIENT_MAP = [
    { name: "행복", index: "4-1", img: "../src/assets/img/ingredient/1.png" },
    { name: "건강", index: "4-2", img: "../src/assets/img/ingredient/2.png" },
    { name: "성취", index: "4-3", img: "../src/assets/img/ingredient/3.png" },
    { name: "금전", index: "4-4", img: "../src/assets/img/ingredient/4.png" },
    { name: "행운", index: "4-5", img: "../src/assets/img/ingredient/5.png" },
    { name: "사랑", index: "4-6", img: "../src/assets/img/ingredient/6.png" },
    { name: "학업", index: "4-7", img: "../src/assets/img/ingredient/7.png" },
    { name: "온정", index: "4-8", img: "../src/assets/img/ingredient/8.png" },
  ];

  const ACCESS_MAP = [
    { name: "전체공개", index: "5-1" },
    { name: "비공개", index: "5-2" },
  ];

  const onClickSize = (index: string) => setSelectedSize(index);

  const checkedIngredient = (value: string, isChecked: boolean) => {
    setSelectedIngredient((prev) => {
      const updateSelectedIngredient = isChecked
        ? [...(prev || []), value]
        : selectedIngredient.filter((item) => item !== value);
      sessionStorage.setItem(
        "selectedIngredient",
        JSON.stringify(updateSelectedIngredient),
      );
      return updateSelectedIngredient;
    });
  };

  const clickIngredient = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setIsChecked(!isChecked);
    checkedIngredient(value, e.target.checked);
  };

  const onClickAccess = (index: string) => setSelectedAccess(index);

  const [storageSize, setStorageSize] = useState(
    sessionStorage.getItem("selectedSize"),
  );

  const [storageAccess, setStorageAccess] = useState(
    sessionStorage.getItem("selectedAccess"),
  );

  useEffect(() => {
    if (selectedIngredient != null) {
      if (selectedIngredient.length > 3) {
        setToggleAlarm(!toggleAlarm);
        setAlarm(true);
        setSelectedIngredient(selectedIngredient.slice(0, 3));
        sessionStorage.setItem(
          "selectedIngredient",
          JSON.stringify(selectedIngredient.slice(0, 3)),
        );
      }
    }

    if (selectedSize != null) {
      sessionStorage.setItem("selectedSize", selectedSize);
      setStorageSize(selectedSize);
    }

    if (selectedAccess != null) {
      sessionStorage.setItem("selectedAccess", selectedAccess);
      setStorageAccess(selectedAccess);
    }
  }, [selectedIngredient, selectedSize, selectedAccess, toggleAlarm]);

  const sizeList = SIZE_MAP.map((btn) => (
    <button
      key={btn.index}
      className={`h-55 w-full rounded-full text-18 ${
        storageSize != null
          ? storageSize === btn.index
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        onClickSize(btn.index);
      }}
    >
      {btn.name}
    </button>
  ));

  const ingredientList = INGREDIENT_MAP.map((btn) => {
    return (
      <li key={btn.index}>
        <input
          type="checkbox"
          id={btn.index}
          className="peer hidden"
          checked={selectedIngredient?.includes(btn.index)}
          onChange={(e) => {
            clickIngredient(e, btn.index);
          }}
        />
        <label
          htmlFor={btn.index}
          className="flex h-100 w-full flex-col items-center justify-center rounded-10 border-[2px] border-solid border-ccc80 text-18 text-888 peer-checked:border-green peer-checked:bg-green10 peer-checked:font-medium peer-checked:text-333"
        >
          <div className="flex flex-col items-center justify-center">
            <span>{btn.name}</span>
            <img src={btn.img} alt="ingredient" className="mt-15 h-30 w-55" />
          </div>
        </label>
      </li>
    );
  });

  const accessList = ACCESS_MAP.map((btn) => (
    <button
      key={btn.index}
      className={`h-55 w-full rounded-full text-18 ${
        storageAccess != null
          ? storageAccess === btn.index
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        onClickAccess(btn.index);
      }}
    >
      {btn.name}
    </button>
  ));

  return (
    <div className="wrap relative h-full bg-bg">
      <OrderTitle />
      <div className="h-full w-full rounded-t-20 bg-white pt-40 pb-50">
        <div className="inner mx-auto h-full">
          <div className="mb-40 w-full">
            <h4 className="mb-20 text-24 font-bold">음료 사이즈 선택</h4>
            <div className="grid grid-cols-2 gap-14">{sizeList}</div>
          </div>
          <div className="mb-40 w-full">
            <h4 className="mb-20">
              <span className="text-24 font-bold">재료 선택</span>
              <span className="text-1 ml-10 font-medium text-555">
                *최대 3개까지 가능
              </span>
            </h4>
            <ul className="grid grid-cols-4 gap-14">{ingredientList}</ul>
          </div>
          <div className="w-full">
            <h4 className="mb-20 text-24 font-bold">공개 여부 선택</h4>
            <div className="grid grid-cols-2 gap-14">{accessList}</div>
          </div>

          <PaginationBtn currentOrder="order2" next="다음" prev="이전" />
        </div>
      </div>
      <div
        className={`absolute ${
          alarm
            ? toggleAlarm
              ? "top-0 left-0 block h-full w-full rounded-10 bg-33380 text-white backdrop-blur-[2px]"
              : "hidden"
            : "hidden"
        }`}
      >
        <div className="relative top-1/2 left-1/2 flex h-150 w-[85%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-40 rounded-10 bg-white text-333">
          <h4 className="mt-10 text-20 font-semibold">
            재료는 <span className="text-red-500">최대 3개</span>까지 선택
            가능합니다.
          </h4>
          <button
            onClick={() => {
              setToggleAlarm(!toggleAlarm);
            }}
            className="font-medium text-888"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
