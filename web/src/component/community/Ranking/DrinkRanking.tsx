import ContentTitle from "../ContentTitle";
import RestRanking from "./Amount/RestRanking";
import TopThree from "./Amount/TopThree";

export default function DrinkingRanking() {
  const TEST_DATA_TOP3 = [
    {
      name: "가나다",
      rank: 1,
      amount: 100,
      url: "../../../../src/assets/img/example-profile.jpg",
    },
    {
      name: "라마바",
      rank: 2,
      amount: 90,
      url: "../../../../src/assets/img/example-profile.jpg",
    },
    {
      name: "사아자",
      rank: 3,
      amount: 80,
      url: "../../../../src/assets/img/example-profile.jpg",
    },
  ];

  const TEST_DATA_REST3 = [
    {
      name: "차카타",
      rank: 4,
      amount: 70,
      url: "../../../../src/assets/img/example-profile.jpg",
    },
    {
      name: "파하거",
      rank: 5,
      amount: 60,
      url: "../../../../src/assets/img/example-profile.jpg",
    },
    {
      name: "너더러",
      rank: 6,
      amount: 50,
      url: "../../../../src/assets/img/example-profile.jpg",
    },
    {
      name: "머버서서",
      rank: 7,
      amount: 40,
      url: "../../../../src/assets/img/example-profile.jpg",
    },
  ];

  const TopThreeComponent = TEST_DATA_TOP3.map((data, index) => (
    <TopThree
      key={index + 1}
      name={data.name}
      rank={data.rank}
      amount={data.amount}
      url={data.url}
    />
  ));

  const RestComponent = TEST_DATA_REST3.map((data, index) => (
    <RestRanking
      key={index + 4}
      name={data.name}
      rank={data.rank}
      amount={data.amount}
      url={data.url}
    />
  ));
  return (
    <div className="mx-auto w-inner pt-30">
      <div className="h-full w-full rounded-20 bg-white p-20">
        <ContentTitle
          title={"🎁 가장 많은 음료를 받은 사람은!"}
          subTitle={"오후 12시 기준"}
        />
        <div>
          <div className="mb-10 grid grid-cols-3 items-end gap-14">
            {TopThreeComponent}
          </div>
          <div className="flex flex-col gap-10">{RestComponent}</div>
        </div>
      </div>
    </div>
  );
}
