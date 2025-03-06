import OrderTitle from "../component/orderpage/OrderTitle";
import PaginationBtn from "../component/orderpage/PaginationBtn";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectSize, updateSize } from "../store/features/orders/sizeSlice";
import {
  selectAccess,
  updateAccess,
} from "../store/features/orders/accessSlice";
import {
  selectIngredient,
  updateIngredient,
} from "../store/features/orders/ingredientSlice";

export default function OrderSizeIngredientAccess() {
  const SIZE_MAP = [
    { name: "Short" },
    { name: "Tall" },
    { name: "Grande" },
    { name: "Venti" },
  ];

  const INGREDIENT_MAP = [
    { name: "행복", img: "../src/assets/img/ingredient/1.png" },
    { name: "건강", img: "../src/assets/img/ingredient/2.png" },
    { name: "성취", img: "../src/assets/img/ingredient/3.png" },
    { name: "금전", img: "../src/assets/img/ingredient/4.png" },
    { name: "행운", img: "../src/assets/img/ingredient/5.png" },
    { name: "사랑", img: "../src/assets/img/ingredient/6.png" },
    { name: "학업", img: "../src/assets/img/ingredient/7.png" },
    { name: "온정", img: "../src/assets/img/ingredient/8.png" },
  ];

  const ACCESS_MAP = [{ name: "전체공개" }, { name: "비공개" }];

  const dispatch = useAppDispatch();
  const currentSize = useAppSelector(selectSize);
  const currentAccess = useAppSelector(selectAccess);
  const currentIngredient = useAppSelector(selectIngredient);

  const clickSize = (index: string) => dispatch(updateSize(index));

  const clickAccess = (index: string) => dispatch(updateAccess(index));

  const clickIngredient = (index: string) => dispatch(updateIngredient(index));

  const sizeList = SIZE_MAP.map((btn, index) => (
    <button
      key={`size-${index}`}
      className={`h-55 w-full rounded-full text-18 ${
        currentSize != null
          ? currentSize.size === `size-${index}`
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        clickSize(`size-${index}`);
      }}
    >
      {btn.name}
    </button>
  ));

  const ingredientList = INGREDIENT_MAP.map((btn, index) => {
    return (
      <li key={`ingredient-${index}`}>
        <input
          type="checkbox"
          id={`ingredient-${index}`}
          className="peer hidden"
          checked={currentIngredient.ingredient?.includes(
            `ingredient-${index}`,
          )}
          onChange={() => {
            clickIngredient(`ingredient-${index}`);
          }}
        />
        <label
          htmlFor={`ingredient-${index}`}
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

  const accessList = ACCESS_MAP.map((btn, index) => (
    <button
      key={`access-${index}`}
      className={`h-55 w-full rounded-full text-18 ${
        currentAccess != null
          ? currentAccess.access === `access-${index}`
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        clickAccess(`access-${index}`);
      }}
    >
      {btn.name}
    </button>
  ));

  return (
    <div className="wrap h-full bg-bg">
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

          <PaginationBtn
            currentOrder="OrderSizeIngredientAccess"
            next="다음"
            prev="이전"
          />
        </div>
      </div>
    </div>
  );
}
