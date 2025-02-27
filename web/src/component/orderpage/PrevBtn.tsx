import { useNavigate } from "react-router";

interface PrevBtnProps {
  orderNum: string;
  word: string;
}

export default function PrevBtn(props: PrevBtnProps) {
  const navigate = useNavigate();

  const clickPagePrev = (currentOrder: string) => {
    if (currentOrder === "order1") {
      navigate("/sharedpage");
    } else if (currentOrder === "order2") {
      navigate("/order1");
    } else if (currentOrder === "order3") {
      navigate("/order2");
    }
  };

  return (
    <button
      className="col-span-1 h-55 w-full rounded-20 bg-ccc80 text-[16px] font-medium text-white"
      onClick={() => {
        clickPagePrev(props.orderNum);
      }}
    >
      {props.word}
    </button>
  );
}
