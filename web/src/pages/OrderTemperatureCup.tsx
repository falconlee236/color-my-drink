import { useEffect, useState } from "react";
import PaginationBtn from "../component/orderpage/PaginationBtn.tsx";
import OrderTitle from "../component/orderpage/OrderTitle.tsx";

export default function OrderTemperatureCup() {
  const TEMPERATURE_MAP = [
    { name: "뜨겁게" },
    { name: "따뜻하게" },
    { name: "차갑게" },
  ];

  const CUP_MAP = [
    { url: "../src/assets/img/cup1.png" },
    { url: "../src/assets/img/cup2.png" },
    { url: "../src/assets/img/cup3.png" },
    { url: "../src/assets/img/cup4.png" },
  ];

  const [selectedTemperature, setSelectedTemperature] = useState<string | null>(
    null,
  );
  const [selectedCup, setSelectedCup] = useState<string | null>(null);
  const [storageTemperature, setStorageTemperature] = useState(
    sessionStorage.getItem("selectedTemperature"),
  );
  const [storageCup, setStorageCup] = useState(
    sessionStorage.getItem("selectedCup"),
  );

  const onClickTemperature = (index: string) => setSelectedTemperature(index);

  const onClickCup = (index: string) => setSelectedCup(index);

  const TemperatureList = TEMPERATURE_MAP.map((btn, index) => (
    <button
      type="button"
      key={`temperature-${index}`}
      className={`h-55 w-full rounded-full text-18 ${
        storageTemperature != null
          ? storageTemperature === `temperature-${index}`
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        onClickTemperature(`temperature-${index}`);
      }}
    >
      {btn.name}
    </button>
  ));

  const cupList = CUP_MAP.map((btn, index) => (
    <button
      type="button"
      key={`cup-${index}`}
      className={`max-h-210 w-full rounded-10 border-[2px] border-solid ${
        storageCup != null
          ? storageCup === `cup-${index}`
            ? "border-green bg-green10"
            : "border-ddd"
          : "border-ddd"
      }`}
      onClick={() => {
        onClickCup(`cup-${index}`);
      }}
    >
      <img className="h-[90%] w-full object-contain" src={btn.url} alt="cup" />
    </button>
  ));

  useEffect(() => {
    if (selectedTemperature != null) {
      sessionStorage.setItem("selectedTemperature", selectedTemperature);
      setStorageTemperature(selectedTemperature);
    }
    if (selectedCup != null) {
      sessionStorage.setItem("selectedCup", selectedCup);
      setStorageCup(selectedCup);
    }
  }, [selectedTemperature, selectedCup]);

  return (
    <div className="wrap h-full bg-bg">
      <OrderTitle />
      <div className="h-full w-full rounded-t-20 bg-white pt-40 pb-50">
        <div className="inner mx-auto h-full">
          <div className="mb-40 w-full">
            <h4 className="mb-20 text-24 font-bold">온도 선택</h4>
            <div className="grid grid-cols-3 gap-5">{TemperatureList}</div>
          </div>
          <div className="w-full">
            <h4 className="mb-20 text-24 font-bold">음료잔 선택</h4>
            <div className="grid grid-cols-2 gap-14">{cupList}</div>
          </div>
          <PaginationBtn
            currentOrder="OrderTemperatureCup"
            next="다음"
            prev="이전"
          />
        </div>
      </div>
    </div>
  );
}
