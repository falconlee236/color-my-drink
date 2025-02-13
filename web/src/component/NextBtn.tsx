import { useNavigate } from "react-router";

interface NextBtnProps {
  step: string;
  word: string;
}

function NextBtn(props: NextBtnProps) {
  const navigate = useNavigate();

  function clickNext(prevStep: string) {
    if (prevStep === "step1") {
      navigate("/step2");
    } else if (prevStep === "step2") {
      navigate("/step3");
    } else if (prevStep === "step3") {
      navigate("/loading");
    }
  }

  return (
    <button
      className="bg-button rounded-20 col-span-3 h-55 w-full text-[16px] font-medium text-white"
      onClick={() => {
        clickNext(props.step);
      }}
    >
      {props.word}
    </button>
  );
}

export default NextBtn;
