import { Swiper, SwiperSlide } from "swiper/react";
import JuiceItem from "./JuiceItem";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

interface JuiceSlideProps {
  totalJuice: number;
}

export default function JuiceSlide(props: JuiceSlideProps) {
  const slideNum = Math.floor(props.totalJuice / 14) + 1;
  const SLIDE_MAP = [...new Array(slideNum)].map((_, index) => index + 1);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      {SLIDE_MAP.map((page, index) => (
        <SwiperSlide key={`${slideNum}-${index}`}>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem num={`${page}.0`} />
            <JuiceItem num={`${page}.1`} />
            <JuiceItem num={`${page}.2`} />
          </div>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem num={`${page}.3`} />
            <JuiceItem num={`${page}.4`} />
            <JuiceItem num={`${page}.5`} />
            <JuiceItem num={`${page}.6`} />
          </div>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem num={`${page}.7`} />
            <JuiceItem num={`${page}.8`} />
            <JuiceItem num={`${page}.9`} />
            <JuiceItem num={`${page}.10`} />
          </div>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem num={`${page}.11`} />
            <JuiceItem num={`${page}.12`} />
            <JuiceItem num={`${page}.13`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
