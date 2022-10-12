import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
SwiperCore.use([Autoplay]);

interface Props {
	banners?: Array<any>;
}

const Banners: FC<Props> = ({ banners }) => {
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			modules={[Pagination]}
			pagination={{
				enabled: true,
				clickable: true,
			}}
			autoplay={{ delay: 3333 }}
			className="z-0"
		>
			{banners?.map((banner: any) => {
				return (
					<SwiperSlide key={banner.id}>
						<Link href="/">
							<a>
								<Image loader={({ src }) => src} src={banner.src} alt="" layout="fill" />
							</a>
						</Link>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
export default Banners;
