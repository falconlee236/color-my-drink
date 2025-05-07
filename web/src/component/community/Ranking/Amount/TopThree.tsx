import { BaseProps } from "./BaseProps";

export default function TopThree(props: BaseProps) {
  return (
    <div className="relative flex h-140 w-full items-center justify-center rounded-10 bg-green">
      <div className="absolute top-10 left-5 h-24 w-24">
        <img
          className="w-24 object-contain"
          src={`${props.rank == 1 ? "../../src/assets/img/icon/first-prize.png" : `${props.rank == 2 ? "../../src/assets/img/icon/second-prize.png" : "../../src/assets/img/icon/third-prize.png"}`}`}
          alt="1등"
        />
      </div>
      <div className="content">
        <div className="mb-15 h-45 w-45 overflow-hidden rounded-full">
          <img
            className="h-full w-full object-contain"
            src={props.url}
            alt="profile"
          />
        </div>
        <div className="text-1 font-mediumtext-1 text-center font-medium text-white">
          <h3 className="mb-10">{props.name}</h3>
          <p>{props.amount}잔</p>
        </div>
      </div>
    </div>
  );
}
