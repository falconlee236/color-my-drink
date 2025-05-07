import Header from "../component/community/Header";
import NavigationBar from "../component/community/Ranking/NavigationBar";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { updateClickNavigation } from "../store/features/communityPage/clickNavigation";
import { useAppDispatch } from "../store/hooks";

export default function ChangeAccount() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const locationName = location.pathname;
  const navigate = useNavigate();

  const goMyAccount = () => navigate("/community/myaccount");
  const resignAccount = () =>
    navigate("/community/myaccount/account/resignNotice");

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
    <div className="wrap relative min-h-screen bg-communityBg">
      <Header title="MY" />
      <div className="mx-auto mt-30 w-inner">
        <h2 className="mb-30 text-20 font-semibold">
          연결된 계정을 확인하세요.
        </h2>
        <div className="mb-30 flex h-55 w-full items-center justify-between rounded-20 bg-white px-20">
          <div className="itmes-center flex gap-15">
            <div className="h-18 w-18">
              <img
                className="object-cotain h-full w-full"
                src="../../src/assets/img/logo-google.png"
                alt="연결된 계정"
              />
            </div>
            <span className="text-18 font-medium">Google</span>
          </div>
          <span className="text-1 font-medium">2025. 03. 07</span>
        </div>
        <button
          className="text-1 mb-100 w-full font-medium text-888"
          onClick={resignAccount}
        >
          탈퇴하기
        </button>
        <div className="grid h-55 w-full grid-cols-4 gap-10">
          <button
            className="h-full w-full rounded-20 bg-ccc80 font-medium text-white"
            onClick={goMyAccount}
          >
            취소
          </button>
          <button
            onClick={goMyAccount}
            className="col-span-3 h-full w-full rounded-20 bg-green font-medium text-white"
          >
            확인
          </button>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}
