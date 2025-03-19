import DrinkingRanking from "../component/community/Ranking/DrinkRanking";
import Header from "../component/community/Header";
import IngredientRanking from "../component/community/Ranking/IngredientRanking";
import VoteRanking from "../component/community/Ranking/VoteRanking";

export default function Community() {
  return (
    <div className="wrap h-full bg-communityBg pb-60">
      <Header title={"인기"} />
      <DrinkingRanking />
      <IngredientRanking />
      <VoteRanking />
    </div>
  );
}
