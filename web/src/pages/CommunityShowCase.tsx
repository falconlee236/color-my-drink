import Header from "../component/community/Header";
import VoteRanking from "../component/community/Ranking/VoteRanking";
import WeeklyVote from "../component/community/Showcase/WeeklyVote";
import NavigationBar from "../component/community/Ranking/NavigationBar";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { updateClickNavigation } from "../store/features/communityPage/clickNavigation";

export default function CommunityShowCase() {
  const dispatch = useDispatch();
  const location = useLocation();
  const locationName = location.pathname;

  useEffect(() => {
    if (locationName == "/community/ranking") {
      dispatch(updateClickNavigation("인기"));
    } else if (locationName == "/community/showcase") {
      dispatch(updateClickNavigation("자랑"));
    } else if (locationName == "/community/notice") {
      dispatch(updateClickNavigation("공지사항"));
    } else {
      dispatch(updateClickNavigation("MY"));
    }
  }, [locationName, dispatch]);

  const BUTTON_DATA = [
    { name: "MY 자랑 보기", url: "../../src/assets/img/icon/file.png" },
    { name: "새 자랑 작성", url: "../../src/assets/img/icon/pencil.png" },
  ];
  const ButtonComponenet = BUTTON_DATA.map((data) => (
    <div>
      <button className="col-span-2 flex h-55 w-full items-center justify-center gap-10 rounded-20 bg-button text-white">
        <div className="h-24 w-24">
          <img
            className="h-full w-full object-contain"
            src={data.url}
            alt={data.name}
          />
        </div>
        <span className="text-18 font-medium">{data.name}</span>
      </button>
    </div>
  ));
  return (
    <div className="wrap relative h-full min-h-screen bg-communityBg">
      <Header title={"자랑"} />
      <div className="mx-auto mt-30 grid w-inner grid-cols-2 gap-14">
        {ButtonComponenet}
      </div>
      <VoteRanking title={"👍최고의 한 잔 TOP 5"} subject="자랑" />
      <WeeklyVote />
      <NavigationBar />
    </div>
  );
}
