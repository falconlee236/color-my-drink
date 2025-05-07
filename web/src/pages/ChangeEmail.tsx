import Header from "../component/community/Header";
import NavigationBar from "../component/community/Ranking/NavigationBar";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { updateClickNavigation } from "../store/features/communityPage/clickNavigation";
import { useAppDispatch } from "../store/hooks";

export default function ChangeEmail() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const locationName = location.pathname;
  const navigate = useNavigate();

  const inputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const goMyAccount = () => navigate("/community/myaccount");

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
        <h2 className="mb-5 text-20 font-semibold">이메일을 입력해주세요.</h2>
        <input
          type="text"
          maxLength={5}
          className="mb-100 h-50 w-full border-b-2 border-green pl-5 text-20 font-semibold outline-0"
          onChange={(e) => inputEmailChange(e)}
        />
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
