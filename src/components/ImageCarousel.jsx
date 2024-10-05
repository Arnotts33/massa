import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./ImageCarousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.css";

function ImageCarousel() {
	const images = [
		"../../public/images/massa-brioche-portrait.jpg",
		"../../public/images/massa-falafels-paysage.jpg",
		"../../public/images/massa-frites-portrait.jpg",
		"../../public/images/massa-pita-a-cuire-paysage.jpg",
		"../../public/images/massa-pita-portrait.jpg",
		"../../public/images/Massa Boris.jpeg",
	];

	return (
		<section className={styles.carouselContainer}>
			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={30}
				slidesPerView={3}
				centeredSlides={true}
				loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				navigation
				className={styles.mySwiper}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img src={image} alt={`Slide ${index}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default ImageCarousel;
