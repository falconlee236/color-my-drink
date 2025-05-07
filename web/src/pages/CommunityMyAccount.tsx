import { useLocation, useNavigate } from "react-router";
import Header from "../component/community/Header";
import NavigationBar from "../component/community/Ranking/NavigationBar";
import { useEffect } from "react";
import { updateClickNavigation } from "../store/features/communityPage/clickNavigation";
import { useAppDispatch } from "../store/hooks";

export default function CommunityMyAccount() {
  const dispatch = useAppDispatch();
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

  const USERDATA_MAP = {
    name: "박이름",
    email: null,
    account: "Google",
  };

  const navigate = useNavigate();
  const clickChangeName = () => navigate("/community/myaccount/name");
  const clickChangeEmail = () => navigate("/community/myaccount/email");
  const clickChangeAccount = () => navigate("/community/myaccount/account");

  return (
    <div className="wrap relative min-h-screen bg-communityBg">
      <Header title={"MY"} />
      <div className="mx-auto w-inner">
        <div className="my-35 w-full rounded-20 bg-white px-20 py-45">
          <div className="mx-auto mb-55 h-160 w-160 rounded-full bg-amber-200"></div>
          <div className="flex flex-col gap-30">
            <div className="flex justify-between text-18">
              <h3 className="font-medium">이름</h3>
              <button
                className="flex items-center gap-10"
                onClick={clickChangeName}
              >
                <span>{USERDATA_MAP.name}</span>
                <img
                  src="../../src/assets/img/icon/right-black.png"
                  alt="이름 수정"
                  className="h-20 w-20"
                />
              </button>
            </div>
            <div className="flex justify-between text-18">
              <h3 className="font-medium">이메일</h3>
              <button
                onClick={clickChangeEmail}
                className="flex items-center gap-10"
              >
                <span
                  className={`${USERDATA_MAP.email == null ? "text-888" : "text-333"}`}
                >{`${USERDATA_MAP.email == null ? "없음" : USERDATA_MAP.email}`}</span>
                <img
                  src="../../src/assets/img/icon/right-black.png"
                  alt="이름 수정"
                  className="h-20 w-20"
                />
              </button>
            </div>
            <div className="flex justify-between text-18">
              <h3 className="font-medium">연결된 계정</h3>
              <div className="flex items-center gap-10">
                <div className=""></div>
                <button
                  onClick={clickChangeAccount}
                  className="flex items-center gap-10"
                >
                  <div className="h-18 w-18">
                    <img
                      className="object-cotain h-full w-full"
                      src={`${USERDATA_MAP.account == "Google" ? "../../src/assets/img/logo-google.png" : USERDATA_MAP.account == "KaKao" ? "../../src/assets/img/logo-kakao.png" : "../../src/assets/img/logo-naver.png"}`}
                      alt="연결된 계정"
                    />
                  </div>
                  <span>{USERDATA_MAP.account}</span>
                  <img
                    src="../../src/assets/img/icon/right-black.png"
                    alt="이름 수정"
                    className="h-20 w-20"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="mb-20 flex h-55 w-full items-center justify-between rounded-20 bg-green px-20">
          <span className="text-18 font-medium text-white">MY 자랑 보기</span>
          <img
            className="h-22 w-22"
            src="../../src/assets/img/icon/right.png"
            alt="MY 자랑 보기"
          />
        </button>
        <button className="mb-20 flex h-55 w-full items-center justify-between rounded-20 bg-green px-20">
          <span className="text-18 font-medium text-white">
            MY 음료 데이터 보기
          </span>
          <img
            className="h-22 w-22"
            src="../../src/assets/img/icon/right.png"
            alt="MY 자랑 보기"
          />
        </button>
      </div>
      <NavigationBar />
    </div>
  );
}
