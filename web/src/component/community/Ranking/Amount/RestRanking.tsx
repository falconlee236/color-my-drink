import { BaseProps } from "./BaseProps";

export default function RestRanking(props: BaseProps) {
  return (
    <div className="borer-green30 flex h-60 w-full items-center justify-between border-b-1 border-b-green30 px-20">
      <div className="flex items-center gap-15">
        <h4 className="w-30 text-22 font-medium">{props.rank}</h4>
        <div className="h-35 w-35 rounded-full bg-indigo-100">
          <img src={props.url} alt="프로필" />
        </div>
        <h5 className="text-1 font-medium">{props.name}</h5>
      </div>
      <p className="text-1 font-medium">{props.amount}잔</p>
    </div>
  );
}
