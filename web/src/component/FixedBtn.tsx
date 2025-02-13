import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

interface FixedBtnProps {
  step: string;
  word: string;
}

function FixedBtn(props: FixedBtnProps) {
  return (
    <div className="mt-50 grid w-full grid-cols-4 gap-[14px]">
      <PrevBtn />
      <NextBtn step={props.step} word={props.word} />
    </div>
  );
}

export default FixedBtn;
