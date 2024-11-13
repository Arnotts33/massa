import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import styles from "./ImageCarousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.css";

function ImageCarousel() {
	const images = [
		"/images/massa-brioche-portrait.jpg",
		"/images/massa-falafels-paysage.jpg",
		"/images/massa-frites-portrait.jpg",
		"/images/massa-pita-a-cuire-paysage.jpg",
		"/images/massa-pita-portrait.jpg",
		"/images/massa-boris.jpeg",
	];

	return (
		<section className={styles.carouselContainer}>
			<Swiper
				modules={[Navigation, Autoplay, EffectCoverflow]}
				grabCursor={true}
				lazy="true"
				spaceBetween={40}
				slidesPerView={2}
				centeredSlides={true}
				loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				// navigation
				className={styles.mySwiper}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1920: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img
							src={image}
							alt={`Slide ${index}`}
							loading="lazy"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default ImageCarousel;
