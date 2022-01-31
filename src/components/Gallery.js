import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css/navigation";
import Moritzhagen1 from "../assets/Moritzhagen1.jpeg";
import Moritzhagen2 from "../assets/Moritzhagen2.jpeg";
import Moritzhagen3 from "../assets/Moritzhagen3.jpeg";
import Moritzhagen4 from "../assets/Moritzhagen4.jpeg";
import Moritzhagen5 from "../assets/Moritzhagen5.jpeg";
import Moritzhagen6 from "../assets/Moritzhagen6.jpeg";
import Moritzhagen7 from "../assets/Moritzhagen7.jpeg";
import Moritzhagen8 from "../assets/Moritzhagen8.jpeg";
import Moritzhagen9 from "../assets/Moritzhagen9.jpeg";
import Moritzhagen10 from "../assets/Moritzhagen10.jpeg";
import Moritzhagen11 from "../assets/Moritzhagen11.jpeg";
import Moritzhagen12 from "../assets/Moritzhagen12.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function MasonryImageList() {
	return (
		<div className="galleryBox">
			<h3>Gallerie</h3>
			<Swiper
				cssMode={true}
				slidesPerView={1}
				navigation={true}
				pagination={true}
				spaceBetween={50}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				mousewheel={true}
				keyboard={true}
				modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen1}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen2}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen3}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen4}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen5}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen6}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen7}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen8}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen9}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen10}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen11}
					></img>
				</SwiperSlide>
				<SwiperSlide>
					<img
						alt="Gallerie Bild"
						className="galleryImage"
						src={Moritzhagen12}
					></img>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
