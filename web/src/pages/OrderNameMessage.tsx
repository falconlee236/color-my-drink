import PaginationBtn from "../component/orderpage/PaginationBtn";
import OrderTitle from "../component/orderpage/OrderTitle";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  selectName,
  updateAiName,
  updateUserName,
} from "../store/features/orders/nameSlice";
import {
  selectLetterSender,
  updateLetterSender,
} from "../store/features/orders/letterSenderSlice";
import {
  selectLetterContent,
  updateLetterContent,
} from "../store/features/orders/letterContentSlice";

export default function OrderNameMessage() {
  const NAME_MAP = [{ name: "예시1" }, { name: "예시2" }, { name: "예시3" }];

  const dispatch = useAppDispatch();

  const currentAiName = useAppSelector(selectName);
  const currentUserName = useAppSelector(selectName);
  const currentLetterSender = useAppSelector(selectLetterSender);
  const currentLetterContent = useAppSelector(selectLetterContent);

  const clickName = (index: string) => dispatch(updateAiName(index));

  const inputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUserName(e.target.value));
  };

  const inputLetterSender = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateLetterSender(e.target.value));
  };

  const inputLetterContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateLetterContent(e.target.value));
  };

  const nameList = NAME_MAP.map((btn, index) => (
    <button
      key={`name-${index}`}
      className={`h-55 w-full rounded-full text-18 ${
        currentAiName != null
          ? `name-${index}` === currentAiName.name
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        clickName(`name-${index}`);
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
            <h4 className="mb-20 text-24 font-bold">음료 이름</h4>
            <div>
              <h4 className="text-20 font-medium">AI 추천 음료 이름</h4>
              <div className="mt-15 grid grid-cols-3 gap-14">{nameList}</div>
            </div>
            <div className="mt-25 mb-40">
              <h4 className="text-20 font-medium">직접 입력하기</h4>
              <input
                type="text"
                value={`${currentUserName ? currentUserName.name : ""}`}
                className="mt-15 h-40 w-full border-b-[2px] border-solid border-green px-5 text-18 focus:outline-0"
                placeholder="8글자 이내로 입력해주세요."
                maxLength={8}
                onChange={(e) => inputUserName(e)}
              />
            </div>
          </div>

          <div className="w-full">
            <h4 className="mb-20 text-24 font-bold">편지작성</h4>
            <div>
              <h4 className="text-20 font-medium">보내는 이</h4>
              <input
                type="text"
                value={`${currentLetterSender ? currentLetterSender.letterSender : ""}`}
                maxLength={5}
                placeholder="5글자 이내로 입력해주세요."
                className="mt-15 h-40 w-full border-b-[2px] border-solid border-green px-5 text-18 focus:outline-0"
                onChange={(e) => inputLetterSender(e)}
              />
            </div>
            <div className="mt-25">
              <h4 className="text-20 font-medium">내용 입력하기(200byte)</h4>
              <textarea
                value={`${currentLetterContent ? currentLetterContent.letterContent : ""}`}
                maxLength={125}
                className="mt-15 h-170 w-full rounded-10 bg-green10 p-20 text-18 focus:outline-0"
                onChange={(e) => inputLetterContent(e)}
              />
            </div>
          </div>
          <PaginationBtn
            currentOrder="OrderNameMessage"
            next="완료하기"
            prev="이전"
          />
        </div>
      </div>
    </div>
  );
}
