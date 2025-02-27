import { useNavigate } from "react-router";

interface NextBtnProps {
  orderNum: string;
  word: string;
}

export default function NextBtn(props: NextBtnProps) {
  const navigate = useNavigate();

  const clickPageNext = (currentOrder: string) => {
    if (currentOrder === "order1") {
      navigate("/order2");
    } else if (currentOrder === "order2") {
      navigate("/order3");
    } else if (currentOrder === "order3") {
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
