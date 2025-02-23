import { useNavigate } from "react-router";

interface LoginButtonProps {
  name: "kakao" | "google" | "naver";
  children: React.ReactNode;
}

export default function LoginButton({ name, children }: LoginButtonProps) {
  const colors = {
    kakao: "bg-kakao",
    google: "bg-google",
    naver: "bg-naver",
  };

  const logo = {
    kakao: "bg-[url(./assets/img/logo-kakao.png)]",
    google: "bg-[url(./assets/img/logo-google.png)]",
    naver: "bg-[url(./assets/img/logo-naver.png)]",
  };

  const navigate = useNavigate();

  const clickToLogin = () => {
    return navigate("/mainpage");
  };

  return (
    <button
      type="button"
      className={`${name} h-[55px] w-[100%] text-base font-medium ${colors[name]} ${name === "naver" ? `text-[#fff]` : `text-[#333]`} relative rounded-10 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.15)]`}
      onClick={clickToLogin}
    >
      <div
        className={`${logo[name]} pointer-events-none absolute top-1/2 left-30 h-[18px] w-[18px] -translate-y-1/2 bg-center`}
      ></div>
      <span>{children}</span>
    </button>
  );
}
