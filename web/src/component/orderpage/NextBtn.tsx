import { useNavigate } from "react-router";

interface NextBtnProps {
  orderNum: string;
  word: string;
}

export default function NextBtn(props: NextBtnProps) {
  const navigate = useNavigate();

  const clickPageNext = (currentOrder: string) => {
    if (currentOrder === "OrderTemperatureCup") {
      navigate("/OrderSizeIngredientAccess");
    } else if (currentOrder === "OrderSizeIngredientAccess") {
      navigate("/OrderNameMessage");
    } else if (currentOrder === "OrderNameMessage") {
      navigate("/loading");
    }
  };

  return (
    <button
      className="col-span-3 h-55 w-full rounded-20 bg-button text-[16px] font-medium text-white"
      onClick={() => {
        clickPageNext(props.orderNum);
      }}
    >
      {props.word}
    </button>
  );
}
