import PaginationBtn from "../component/orderpage/PaginationBtn.tsx";
import OrderTitle from "../component/orderpage/OrderTitle.tsx";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import {
  selectTemperature,
  updateTemperature,
} from "../store/features/orders/temperatureSlice.ts";
import { selectCup, updateCup } from "../store/features/orders/cupSlice.ts";

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

  const currentTemperature = useAppSelector(selectTemperature);
  const currentCup = useAppSelector(selectCup);

  const dispatch = useAppDispatch();

  const clickTemperature = (index: string) =>
    dispatch(updateTemperature(index));
  const clickCup = (index: string) => dispatch(updateCup(index));

  const TemperatureList = TEMPERATURE_MAP.map((btn, index) => (
    <button
      type="button"
      key={`temperature-${index}`}
      className={`h-55 w-full rounded-full text-18 ${
        currentTemperature != null
          ? currentTemperature.temperature === `temperature-${index}`
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        clickTemperature(`temperature-${index}`);
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
        currentCup != null
          ? currentCup.cup === `cup-${index}`
            ? "border-green bg-green10"
            : "border-ddd"
          : "border-ddd"
      }`}
      onClick={() => {
        clickCup(`cup-${index}`);
      }}
    >
      <img className="h-[90%] w-full object-contain" src={btn.url} alt="cup" />
    </button>
  ));

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
