import { useNavigate } from "react-router";

interface PrevBtnProps {
  orderNum: string;
  word: string;
}

export default function PrevBtn(props: PrevBtnProps) {
  const navigate = useNavigate();

  const clickPagePrev = (currentOrder: string) => {
    if (currentOrder === "OrderTemperatureCup") {
      navigate("/sharedpage");
    } else if (currentOrder === "OrderSizeIngredientAccess") {
      navigate("/OrderTemperatureCup");
    } else if (currentOrder === "OrderNameMessage") {
      navigate("/OrderSizeIngredientAccess");
    }
  };

  return (
    <button
      className="col-span-1 h-55 w-full rounded-20 bg-ccc80 font-medium text-white"
      onClick={() => {
        clickPagePrev(props.orderNum);
      }}
    >
      {props.word}
    </button>
  );
}
