import {
  updateClickModal,
  valueClickModal,
} from "../../store/features/main-sharedPage/clickModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface JuiceItemProps {
  num: string;
}

export default function JuiceItem(props: JuiceItemProps) {
  const dispatch = useAppDispatch();

  const currentClickModal = useAppSelector(valueClickModal);

  const showModal = (index: string) => {
    dispatch(updateClickModal(!currentClickModal.clickModal));
    console.log(index);
  };

  return (
    <div
      className="flex h-70 w-70 cursor-pointer items-center justify-center"
      onClick={() => showModal(props.num)}
    >
      <div className="relative h-20 w-20 cursor-pointer rounded-full bg-gray-500">
        <span className="absolute top-1/2 left-1/2 h-20 w-50 -translate-x-1/2 -translate-y-1/2 text-center text-[18px] font-bold">
          {props.num}
        </span>
      </div>
    </div>
  );
}
