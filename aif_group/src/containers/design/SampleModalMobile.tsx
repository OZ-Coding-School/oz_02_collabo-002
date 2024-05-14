import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SampleModalMobile = () => {
  let sampleImageList = [
    {
      src: '/images/sample_img_1.png',
      keyword: '키워드1',
    },
    {
      src: '/images/sample_img_2.png',
      keyword: '키워드2',
    },
    {
      src: '/images/sample_img_3.png',
      keyword: '키워드3',
    },
    {
      src: '/images/sample_img_4.png',
      keyword: '키워드4',
    },
    {
      src: '/images/sample_img_5.png',
      keyword: '키워드5',
    },
    {
      src: '/images/sample_img_6.png',
      keyword: '키워드6',
    },
    {
      src: '/images/sample_img_7.png',
      keyword: '키워드7',
    },
    {
      src: '/images/sample_img_8.png',
      keyword: '키워드8',
    },
    {
      src: '/images/sample_img_9.png',
      keyword: '키워드9',
    },
    {
      src: '/images/sample_img_10.png',
      keyword: '키워드10',
    },
  ];

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
        {sampleImageList?.map((item, index) => {
          return (
            <SwiperSlide key={index} className={'flex justify-center items-center absolute'}>
              <div className="w-full max-h-[460px] bg-sample_img_bg p-8 relative flex justify-center items-center">
                <Image
                  src={item.src}
                  alt="sample-image"
                  width={440}
                  height={480}
                  className="drop-shadow-tShirt object-contain"
                />
              </div>
              <div className="w-full h-14 bg-input_bg relative z-30 flex justify-center items-center">
                <div className="text-lg text-btn_text xm:text-base">{item.keyword}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SampleModalMobile;
