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
      {SLIDE_MAP.map((page) => (
        <SwiperSlide key={slideNum}>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem index={`${page}.1`} />
            <JuiceItem index={`${page}.2`} />
            <JuiceItem index={`${page}.3`} />
          </div>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem index={`${page}.4`} />
            <JuiceItem index={`${page}.5`} />
            <JuiceItem index={`${page}.6`} />
            <JuiceItem index={`${page}.7`} />
          </div>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem index={`${page}.8`} />
            <JuiceItem index={`${page}.9`} />
            <JuiceItem index={`${page}.10`} />
            <JuiceItem index={`${page}.11`} />
          </div>
          <div className="mb-18 flex justify-center gap-18">
            <JuiceItem index={`${page}.12`} />
            <JuiceItem index={`${page}.13`} />
            <JuiceItem index={`${page}.14`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
