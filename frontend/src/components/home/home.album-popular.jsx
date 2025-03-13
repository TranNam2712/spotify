import { NavLink } from "react-router-dom";
import AlbumCard from "../cards/album.card";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const PopularAlbum = () => {
  const swiperRef = useRef(null);
  const [itemPerSlide, setItemPerSlide] = useState(5);
  const { isShowMore, isShowNowPlaying, isShowQueue } = useSelector(
    (state) => state.sidebar
  );

  useEffect(() => {
    if (isShowMore || isShowNowPlaying || isShowQueue) setItemPerSlide(4);
    if (isShowMore && (isShowNowPlaying || isShowQueue)) setItemPerSlide(3);
    if (!isShowMore && !isShowNowPlaying && !isShowQueue) setItemPerSlide(5);
  }, [isShowMore, isShowNowPlaying, isShowQueue]);

  return (
    <div className="flex flex-col gap-10">
      {/* list album */}
      <div>
        <div className="flex items-center justify-between">
          <NavLink
            className="font-semibold tracking-wider text-2xl hover:underline"
            to={"/popular-album"}
          >
            Popular Album
          </NavLink>

          <NavLink
            className="text-sm font-semibold text-gray-400 hover:underline"
            to={"/popular-album"}
          >
            See all
          </NavLink>
        </div>

        {/* slider */}
        <div className="relative container mx-auto overflow-hidden mt-5">
          {/* Previous */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft size={20} />
          </button>

          <Swiper
            key={itemPerSlide}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={itemPerSlide}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: itemPerSlide },
            }}
          >
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
            <SwiperSlide>
              <AlbumCard />
            </SwiperSlide>
          </Swiper>

          {/* Next */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularAlbum;
