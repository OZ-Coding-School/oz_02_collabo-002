import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sampleImageList } from '../../../public';

const SampleModalMobile = () => {
  const sampleImages = sampleImageList;

  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        simulateTouch={true}
        grabCursor={true}
        centeredSlides={true}
        observer={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="w-full max-h-[520px] mobile-swiper">
        {sampleImages?.map((item, index) => {
          return (
            <SwiperSlide key={index} className={'flex justify-center items-center absolute'}>
              <div className="w-full max-h-[460px] bg-sample_img_bg p-8 relative flex justify-center items-center">
                <Image src={item.src} alt="sample-image" width={440} height={480} className="object-contain" />
              </div>
              <div className="w-full h-14 bg-input_bg relative z-30 flex justify-center items-center">
                <div className="px-3 text-base text-btn_text xm:text-sm">{item.keyword}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SampleModalMobile;
