import ContentTitle from "../ContentTitle";
import WeeklyVoteSlide from "./WeeklyVoteSlide";

export default function WeeklyVote() {
  return (
    <div className="mx-auto w-inner pt-40 pb-100">
      <div className="h-full w-full rounded-20 bg-white p-20">
        <ContentTitle
          title="👍 이 한 잔, 어때?"
          subTitle={"마음에 드는 음료의 이름을 발견하면 하트를 눌러주세요!"}
        />
        <div className="mt-25">
          <h4 className="mb-25 text-center text-22 font-medium">3월 1주 차</h4>
          <WeeklyVoteSlide />
        </div>
      </div>
    </div>
  );
}
