import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

interface PaginationBtnProps {
  currentOrder: string;
  next: string;
  prev: string;
}

export default function PaginationBtn(props: PaginationBtnProps) {
  return (
    <div className="mt-50 grid w-full grid-cols-4 gap-14">
      <PrevBtn orderNum={props.currentOrder} word={props.prev} />
      <NextBtn orderNum={props.currentOrder} word={props.next} />
    </div>
  );
}
