import { useNavigate } from "react-router";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const goToMainpage = () => navigate("/mainpage");
  return (
    <div className="sticky top-0 left-0 z-100 h-55 w-full border-b-1 border-b-ccc50 bg-white">
      <div className="m-auto flex h-full w-inner items-center justify-between">
        <h1 className="text-22 font-bold">{props.title}</h1>
        <button className="h-24 w-24" onClick={goToMainpage}>
          <img
            className="w-24 object-cover"
            src="../../../src/assets/img/icon/home.png"
            alt="메인페이지로 나가기"
          />
        </button>
      </div>
    </div>
  );
}
