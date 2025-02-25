import FixedBtn from "../component/FixedBtn";
import StepTitle from "../component/StepTitle";

function Step3() {
  return (
    <div className="wrap flex h-full flex-col bg-bg">
      <StepTitle />
      <div className="h-full w-full rounded-t-[20px] bg-white py-30">
        <div className="inner relative m-auto flex h-[100%] flex-col items-center">
          <div className="mb-40 w-full">
            <h4 className="mb-15 text-[22px] font-bold">음료 이름</h4>
            <div>
              <h4 className="text-[18px] font-medium">AI 추천 음료 이름</h4>
              <div className="grid grid-cols-3 gap-[14px]"></div>
            </div>
            <div>
              <h4 className="text-[18px] font-medium">직접 입력하기</h4>
              <input
                type="text"
                className="h-40 w-full border-b-[2px] border-solid border-green px-[5px] text-[16px] focus:outline-0"
                placeholder="8글자 이내로 입력해주세요."
              />
            </div>
          </div>

          <div className="mb-40 w-full">
            <h4 className="mb-15 text-[22px] font-bold">편지작성</h4>
            <div className="mb-20">
              <h4 className="mb-10 text-[18px] font-medium">보내는 이</h4>
              <input
                maxLength={5}
                type="text"
                placeholder="5글자 이내로 입력해주세요."
                className="h-40 w-full border-b-[2px] border-solid border-green px-[5px] focus:outline-0"
              />
            </div>
            <div>
              <h4 className="mb-10 text-[18px] font-medium">
                내용 입력하기(200byte)
              </h4>
              <textarea
                maxLength={125}
                className="h-170 w-full rounded-10 bg-green20 p-20 text-[16px] focus:outline-0"
              />
            </div>
          </div>
          <FixedBtn step={"step3"} word={"완료하기"} />
        </div>
      </div>
    </div>
  );
}

export default Step3;
