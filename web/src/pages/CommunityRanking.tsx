import DrinkingRanking from "../component/community/Ranking/DrinkRanking";
import Header from "../component/community/Header";
import IngredientRanking from "../component/community/Ranking/IngredientRanking";
import VoteRanking from "../component/community/Ranking/VoteRanking";
import NavigationBar from "../component/community/Ranking/NavigationBar";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { updateClickNavigation } from "../store/features/communityPage/clickNavigation";

export default function CommunityRanking() {
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

  return (
    <div className="wrap relative h-full bg-communityBg">
      <Header title={"인기"} />
      <DrinkingRanking />
      <IngredientRanking />
      <VoteRanking title={"👍최고의 한 잔"} subject={"인기"} />
      <NavigationBar />
    </div>
  );
}
