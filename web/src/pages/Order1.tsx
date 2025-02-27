import { useEffect, useState } from "react";
import PaginationBtn from "../component/orderpage/PaginationBtn.tsx";
import OrderTitle from "../component/orderpage/OrderTitle.tsx";

export default function Order1() {
  const TEMP_MAP = [
    { name: "뜨겁게", index: "1-1" },
    { name: "따뜻하게", index: "1-2" },
    { name: "차갑게", index: "1-3" },
  ];

  const CUP_MAP = [
    { index: "2-1", url: "../src/assets/img/cup1.png" },
    { index: "2-2", url: "../src/assets/img/cup2.png" },
    { index: "2-3", url: "../src/assets/img/cup3.png" },
    { index: "2-4", url: "../src/assets/img/cup4.png" },
  ];

  const [selectedTemp, setSelectedTemp] = useState<string | null>(null);
  const [selectedCup, setSelectedCup] = useState<string | null>(null);
  const [storageTemp, setStorageTemp] = useState(
    sessionStorage.getItem("selectedTemp"),
  );
  const [storageCup, setStorageCup] = useState(
    sessionStorage.getItem("selectedCup"),
  );

  const onClickTemp = (index: string) => setSelectedTemp(index);

  const onClickCup = (index: string) => setSelectedCup(index);

  const tempList = TEMP_MAP.map((btn) => (
    <button
      type="button"
      key={btn.index}
      className={`h-55 w-full rounded-full text-18 ${
        storageTemp != null
          ? storageTemp === btn.index
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        onClickTemp(btn.index);
      }}
    >
      {btn.name}
    </button>
  ));

  const glassList = CUP_MAP.map((btn) => (
    <button
      type="button"
      key={btn.index}
      className={`max-h-210 w-full rounded-10 border-[2px] border-solid ${
        storageCup != null
          ? storageCup === btn.index
            ? "border-green bg-green10"
            : "border-ddd"
          : "border-ddd"
      }`}
      onClick={() => {
        onClickCup(btn.index);
      }}
    >
      <img className="h-[90%] w-full object-contain" src={btn.url} alt="cup" />
    </button>
  ));

  useEffect(() => {
    if (selectedTemp != null) {
      sessionStorage.setItem("selectedTemp", selectedTemp);
      setStorageTemp(selectedTemp);
    }
    if (selectedCup != null) {
      sessionStorage.setItem("selectedCup", selectedCup);
      setStorageCup(selectedCup);
    }
  }, [selectedTemp, selectedCup]);

  return (
    <div className="wrap h-full bg-bg">
      <OrderTitle />
      <div className="h-full w-full rounded-t-20 bg-white pt-40 pb-50">
        <div className="inner mx-auto h-full">
          <div className="mb-40 w-full">
            <h4 className="mb-20 text-24 font-bold">온도 선택</h4>
            <div className="grid grid-cols-3 gap-5">{tempList}</div>
          </div>
          <div className="w-full">
            <h4 className="mb-20 text-24 font-bold">음료잔 선택</h4>
            <div className="grid grid-cols-2 gap-14">{glassList}</div>
          </div>
          <PaginationBtn currentOrder="order1" next="다음" prev="이전" />
        </div>
      </div>
    </div>
  );
}
