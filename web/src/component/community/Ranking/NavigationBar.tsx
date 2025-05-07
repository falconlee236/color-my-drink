import { useNavigate } from "react-router";
import {
  updateClickNavigation,
  valueNavigation,
} from "../../../store/features/communityPage/clickNavigation";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export default function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentNavigation = useAppSelector(valueNavigation);
  const clickNavigation = (name: string) => {
    dispatch(updateClickNavigation(name));
    if (name == "인기") {
      navigate("/community/ranking");
    } else if (name == "자랑") {
      navigate("/community/showcase");
    } else if (name == "공지사항") {
      navigate("/community/notice");
    } else {
      navigate("/community/myaccount");
    }
  };

  const NAVIGATION_MAP = [
    {
      name: "인기",
      urlNormal: "../../../src/assets/img/icon/community-navigation-1.png",
      urlColored:
        "../../../src/assets/img/icon/community-navigation-1-colored.png",
    },
    {
      name: "자랑",
      urlNormal: "../../../src/assets/img/icon/community-navigation-2.png",
      urlColored:
        "../../../src/assets/img/icon/community-navigation-2-colored.png",
    },
    {
      name: "공지사항",
      urlNormal: "../../../src/assets/img/icon/community-navigation-3.png",
      urlColored:
        "../../../src/assets/img/icon/community-navigation-3-colored.png",
    },
    {
      name: "MY",
      urlNormal: "../../../src/assets/img/icon/community-navigation-4.png",
      urlColored:
        "../../../src/assets/img/icon/community-navigation-4-colored.png",
    },
  ];

  const NavigationList = NAVIGATION_MAP.map((navigation) => (
    <button
      className="flex flex-col items-center justify-center gap-5"
      onClick={() => {
        clickNavigation(navigation.name);
      }}
    >
      <div className="h-24 w-24">
        <img
          className="h-full w-full object-contain"
          src={`${currentNavigation.navigation == navigation.name ? navigation.urlColored : navigation.urlNormal}`}
          alt={navigation.name}
        />
      </div>
      <p
        className={`text-14 ${currentNavigation.navigation == navigation.name ? "font-bold text-green" : "font-medium text-888"}`}
      >
        {navigation.name}
      </p>
    </button>
  ));

  return (
    <div className="fixed right-0 bottom-0 left-0 z-100 mx-auto h-60 max-w-[768px] rounded-t-10 border-t-1 border-t-ccc50 bg-white">
      <div className="mx-auto grid h-full w-inner grid-cols-4">
        {NavigationList}
      </div>
    </div>
  );
}
