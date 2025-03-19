interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="h-55 w-full bg-white">
      <div className="m-auto flex h-full w-inner items-center justify-between">
        <h1 className="text-22 font-bold">{props.title}</h1>
        <div className="h-24 w-24">
          <img
            className="w-24 object-cover"
            src="../../src/assets/img/icon/home.png"
            alt="메인페이지로 나가기"
          />
        </div>
      </div>
    </div>
  );
}
