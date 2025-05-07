import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { SwiperOptions } from "swiper/types";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hooks";
import {
  updateVoting,
  valueVoting,
} from "../../../store/features/communityPage/voting";
import SwiperCore from "swiper";

export default function WeeklyVoteSlide() {
  const TEST_DATA = [
    {
      name: "음료 이름",
      ingredient: "음료 재료",
      user: "이름",
      heart: "01",
      userImg: "../../../../src/assets/img/example-profile.jpg",
      juiceImg: "../../../../src/assets/img/example.png",
    },
    {
      name: "음료 이름",
      ingredient: "음료 재료",
      user: "이름",
      heart: "02",
      userImg: "../../../../src/assets/img/example-profile.jpg",
      juiceImg: "../../../../src/assets/img/example.png",
    },
    {
      name: "음료 이름",
      ingredient: "음료 재료",
      user: "이름",
      heart: "03",
      userImg: "../../../../src/assets/img/example-profile.jpg",
      juiceImg: "../../../../src/assets/img/example.png",
    },
    {
      name: "음료 이름",
      ingredient: "음료 재료",
      user: "이름",
      heart: "04",
      userImg: "../../../../src/assets/img/example-profile.jpg",
      juiceImg: "../../../../src/assets/img/example.png",
    },
    {
      name: "음료 이름",
      ingredient: "음료 재료",
      user: "이름",
      heart: "05",
      userImg: "../../../../src/assets/img/example-profile.jpg",
      juiceImg: "../../../../src/assets/img/example.png",
    },
  ];
  const dispatch = useDispatch();
  const currentVoting = useAppSelector(valueVoting);
  const voteJuice = (index: string) => {
    dispatch(updateVoting(index));
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideNum = Math.floor(TEST_DATA.length / 3 + 1);
  const SLIDE_MAP = [...new Array(slideNum)].map((_, index) => {
    const start = index * 3;
    const end = start + 3;
    return TEST_DATA.slice(start, end);
  });

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [swiperSetting, setSwiperSetting] = useState<SwiperOptions | null>(
    null,
  );
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const updateDisabled = () => {
    if (prevRef.current) {
      const ariaDisabled = prevRef.current.getAttribute("aria-disabled");
      setIsPrevDisabled(ariaDisabled === "true");
    }
    if (nextRef.current) {
      const ariaDisabled = nextRef.current.getAttribute("aria-disabled");
      setIsNextDisabled(ariaDisabled === "true");
    }
  };

  useEffect(() => {
    if (!swiperSetting) {
      const settings = {
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        },
        spaceBetween: 50,
        slidesPerView: 1,
        onBeforeInit: (swiper: SwiperClass) => {
          if (swiper.params.navigation && swiper.params.navigation !== true) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }
        },
        onSlideChange: () => {
          updateDisabled();
        },
        onTransitionEnd: (swiper: SwiperCore) => {
          updateDisabled();
          setCurrentIndex(swiper.activeIndex);
        },
      };
      setSwiperSetting(settings);
    }
  }, [swiperSetting]);
  return (
    <div>
      {swiperSetting && (
        <Swiper
          {...swiperSetting}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
        >
          {SLIDE_MAP.map((data, index) => (
            <SwiperSlide key={index}>
              {data.map((data) => (
                <div className="relative mb-20 h-120 w-full rounded-20 border-1 border-green px-20">
                  <div className="flex h-full w-full items-center">
                    <div className="flex w-full justify-between">
                      <div className="flex items-center">
                        <div className="mr-30 h-80 w-60">
                          <img
                            src={data.juiceImg}
                            alt="data.juiceImg"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="mb-5 text-18 font-semibold">
                            {data.name}
                          </h3>
                          <p className="mb-10 text-14">{data.ingredient}</p>
                          <div className="flex items-center justify-center">
                            <div className="h-25 w-25 overflow-hidden rounded-full">
                              <img
                                src={data.userImg}
                                alt="{data.userImg}"
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <span className="text-1 font-medium">
                              {data.user}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-5">
                          <div className="h-22 w-22">
                            <img
                              src="../../../../src/assets/img/icon/red-heart.png"
                              alt="red"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <span className="text-18 font-bold">
                            {data.heart}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-0 h-50 w-85 rounded-tl-20 rounded-br-20 bg-green">
                    <button
                      key={`voting-${index}`}
                      onClick={() => {
                        voteJuice(`voting-${index}`);
                      }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <div className="h-22 w-22">
                        <img
                          className="h-full w-full object-contain"
                          src={`${currentVoting.voting == `voting-${index}` ? "../../../../src/assets/img/icon/heart-red.png" : "../../../../src/assets/img/icon/heart-white.png"}`}
                          alt="투표"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </SwiperSlide>
          ))}
          <div className="flex items-center justify-center gap-20">
            <button
              aria-disabled={isPrevDisabled}
              className={`flex h-28 w-28 items-center justify-center overflow-hidden rounded-[8px] ${isPrevDisabled ? "bg-green50" : "bg-green"}`}
              ref={prevRef}
            >
              <img
                className="h-24 w-24 object-contain"
                src="../../../../src/assets/img/icon/left.png"
                alt=""
              />
            </button>
            <span>{currentIndex + 1}</span>
            <button
              aria-disabled={isNextDisabled}
              className={`flex h-28 w-28 items-center justify-center rounded-[8px] ${isNextDisabled ? "bg-green50" : "bg-green"}`}
              ref={nextRef}
            >
              <img
                className="h-24 w-24"
                src="../../../../src/assets/img/icon/right.png"
                alt=""
              />
            </button>
          </div>
        </Swiper>
      )}
    </div>
  );
}
