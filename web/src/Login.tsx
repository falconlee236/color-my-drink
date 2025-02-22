import LoginButton from "./component/LoginButton.tsx";

function Login() {
  return (
    <div className="wrap bg-[url(./img/bg_login.jpg)] bg-center">
      <div className="inner flex h-full flex-col justify-center gap-[42%]">
        <div className="flex flex-col justify-center gap-10 text-center">
          <h1 className="text-55 font-semibold">선물 한 잔</h1>
          <h2 className="text-20 font-semibold">A Cup of Present</h2>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[12px]">
            <LoginButton name="kakao">카카오계정으로 계속하기</LoginButton>
            <LoginButton name="google">구글로 계속하기</LoginButton>
            <LoginButton name="naver">네이버로 계속하기</LoginButton>
          </div>
          <p className="block text-center text-[13px]">
            회원가입/로그인을 통해 본 서비스를 이용하실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
