import { useEffect, useState } from "react";
import Header from "../component/community/Header";
import NavigationBar from "../component/community/Ranking/NavigationBar";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { updateClickNavigation } from "../store/features/communityPage/clickNavigation";

export default function CommunityNotice() {
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

  const NOTICE_MAP = [
    {
      title: "공지사항 제목입니다1",
      date: "2025.05.02",
      content:
        "공지사항 내용입니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    },
    {
      title: "공지사항 제목입니다2",
      date: "2025.04.02",
      content:
        "공지사항 내용입니다. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세",
    },
  ];

  const [noticeIndex, setNoticeIndex] = useState<number | null>(null);
  const openNoticeDetail = (index: number) => {
    if (noticeIndex == index) {
      setNoticeIndex(null);
    } else {
      setNoticeIndex(index);
    }
  };

  const NoticeContent = NOTICE_MAP.map((data, index) => (
    <div className="mb-20 w-full rounded-20 bg-white p-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-10 text-20">{data.title}</h2>
          <p className="text-1 text-ccc">{data.date}</p>
        </div>
        <button
          className={`h-24 w-24 object-contain duration-700 ${noticeIndex == index ? "rotate-45" : "rotate-0"}`}
          onClick={() => openNoticeDetail(index)}
        >
          <img
            src="../../src/assets/img/icon/plus.png"
            alt="더보기"
            className="h-full w-full object-contain"
          />
        </button>
      </div>
      <div
        className={`duration-1000 ${noticeIndex == index ? "opacity-full my-20 w-full border-1 border-green30" : "max-h-0 opacity-0"}`}
      ></div>
      <div
        className={`duration-1000 ${noticeIndex == index ? "text-1 opacity-full leading-[20px]" : "max-h-0 opacity-0"}`}
      >
        {data.content}
      </div>
    </div>
  ));

  return (
    <div className="wrap relative min-h-screen bg-communityBg">
      <Header title={"공지사항"} />
      <div className="mx-auto w-inner pt-30">{NoticeContent}</div>
      <NavigationBar />
    </div>
  );
}
