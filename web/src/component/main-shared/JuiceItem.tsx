interface JuiceItemProps {
  index: string;
}
export default function JuiceItem(props: JuiceItemProps) {
  return (
    <div className="flex h-70 w-70 items-center justify-center">
      <div className="relative h-20 w-20 rounded-full bg-gray-500">
        <span className="absolute top-1/2 left-1/2 h-20 w-50 -translate-x-1/2 -translate-y-1/2 text-center text-[18px] font-bold">
          {props.index}
        </span>
      </div>
    </div>
  );
}
