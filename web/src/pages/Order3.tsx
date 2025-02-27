import PaginationBtn from "../component/orderpage/PaginationBtn";
import OrderTitle from "../component/orderpage/OrderTitle";
import { useEffect, useState } from "react";

function Step3() {
  const NAME_MAP = [
    { name: "예시1", index: "6-1" },
    { name: "예시2", index: "6-2" },
    { name: "예시3", index: "6-3" },
  ];

  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [inputName, setInputName] = useState<string | null>(null);
  const [inputSender, setInputSender] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState<string | null>(null);

  const [storageName, setStorageName] = useState(
    sessionStorage.getItem("selectedName"),
  );
  const [storageInputName, setStorageInputName] = useState(
    sessionStorage.getItem("inputName"),
  );
  const [storageInputSender, setStorageInputSender] = useState(
    sessionStorage.getItem("inputSender"),
  );
  const [storageInputMessage, setStorageInputMessage] = useState(
    sessionStorage.getItem("inputMessage"),
  );

  const clickName = (index: string) => setSelectedName(index);

  const writeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
    setStorageInputName(e.target.value);
  };

  const wrtieSender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSender(e.target.value);
    setStorageInputSender(e.target.value);
  };

  const writeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
    setStorageInputMessage(e.target.value);
  };

  const nameList = NAME_MAP.map((btn) => (
    <button
      key={btn.index}
      className={`h-55 w-full rounded-full text-18 ${
        storageName != null
          ? btn.index === storageName
            ? "bg-green font-semibold text-white"
            : "bg-ccc25 text-888"
          : "bg-ccc25 text-888"
      }`}
      onClick={() => {
        clickName(btn.index);
      }}
    >
      {btn.name}
    </button>
  ));

  useEffect(() => {
    if (selectedName != null) {
      sessionStorage.setItem("selectedName", selectedName);
      setStorageName(selectedName);
    }
    if (inputName != null) {
      sessionStorage.setItem("inputName", inputName);
      setStorageInputName(inputName);
    }
    if (inputSender != null) {
      sessionStorage.setItem("inputSender", inputSender);
      setStorageInputSender(inputSender);
    }
    if (inputMessage != null) {
      sessionStorage.setItem("inputMessage", inputMessage);
      setStorageInputMessage(inputMessage);
    }
  }, [selectedName, inputName, inputMessage, inputSender]);

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
                value={`${storageInputName ? storageInputName : ""}`}
                className="mt-15 h-40 w-full border-b-[2px] border-solid border-green px-5 text-18 focus:outline-0"
                placeholder="8글자 이내로 입력해주세요."
                maxLength={8}
                onChange={(e) => writeName(e)}
              />
            </div>
          </div>

          <div className="w-full">
            <h4 className="mb-20 text-24 font-bold">편지작성</h4>
            <div>
              <h4 className="text-20 font-medium">보내는 이</h4>
              <input
                type="text"
                value={`${storageInputSender ? storageInputSender : ""}`}
                maxLength={5}
                placeholder="5글자 이내로 입력해주세요."
                className="mt-15 h-40 w-full border-b-[2px] border-solid border-green px-5 text-18 focus:outline-0"
                onChange={(e) => wrtieSender(e)}
              />
            </div>
            <div className="mt-25">
              <h4 className="text-20 font-medium">내용 입력하기(200byte)</h4>
              <textarea
                value={`${storageInputMessage ? storageInputMessage : ""}`}
                maxLength={125}
                className="mt-15 h-170 w-full rounded-10 bg-green10 p-20 text-18 focus:outline-0"
                onChange={(e) => writeMessage(e)}
              />
            </div>
          </div>
          <PaginationBtn currentOrder="order3" next="완료하기" prev="이전" />
        </div>
      </div>
    </div>
  );
}

export default Step3;
