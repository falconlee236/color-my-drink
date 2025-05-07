import Header from "../component/community/Header";
import NavigationBar from "../component/community/Ranking/NavigationBar";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { updateClickNavigation } from "../store/features/communityPage/clickNavigation";
import { useAppDispatch } from "../store/hooks";

export default function ResignNotice() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const locationName = location.pathname;
  const navigate = useNavigate();

  const goMyAccount = () => navigate("/community/myaccount");
  const goToLogin = () => navigate("/");

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
        <h2 className="mb-50 text-center text-20 font-semibold">주의사항</h2>
        <p className="text-1 mb-30 text-center font-medium text-555">
          탈되하기 전 주의사항을 확인하세요.
        </p>
        <div className="mb-30 w-full rounded-20 border-1 border-green50 bg-white p-20 text-14 leading-24 text-555">
          <ul className="break-keep">
            <li>
              1. 선물 받은 음료, 자랑글, 좋아요 등 모든 정보가 삭제됩니다.
            </li>
            <li>2. 탈퇴하시면 모든 데이터는 복구가 불가능합니다.</li>
          </ul>
        </div>

        <div className="mb-70 flex items-center justify-center gap-10">
          <input type="checkbox" className="h-20 w-20" />
          <p className="text-14 text-555">
            안내사항을 모두 확인하였으며, 이에 동의합니다.{" "}
          </p>
        </div>

        <div className="grid h-55 w-full grid-cols-4 gap-10">
          <button
            className="h-full w-full rounded-20 bg-ccc80 font-medium text-white"
            onClick={goMyAccount}
          >
            취소
          </button>
          <button
            onClick={goToLogin}
            className="col-span-3 h-full w-full rounded-20 bg-green font-medium text-white"
          >
            탈퇴하기
          </button>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}
