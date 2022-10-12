import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import { NextPage } from "next";
import products from "../product.json";
import Banners from "../components/pages/Home/Banners";
import SlideProducts from "../components/pages/Home/SlideProducts";
SwiperCore.use([Autoplay]);
const banners: any = [
	{
		id: 1,
		src: "https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/banner/top-banner-pc.png",
	},
];
const Home: NextPage = () => {
	return (
		<div>
			<Banners banners={banners} />
			<SlideProducts products={products} />
		</div>
	);
};

export default Home;
