import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import ProductCard from "../../ProductCard";
SwiperCore.use([Autoplay]);

interface Props {
	products?: Array<any>;
}

const SlideProducts: FC<Props> = ({ products }) => {
	return (
		<div className="mx-4 my-4">
			<Swiper
				spaceBetween={16}
				slidesPerView={5}
				modules={[Pagination]}
				pagination={{
					enabled: true,
					clickable: true,
				}}
				autoplay={{ delay: 3333 }}
			>
				{products?.map((product: any) => {
					return (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} />
						</SwiperSlide>
					);
				})}

				{products?.map((product: any) => {
					return (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} />
						</SwiperSlide>
					);
				})}

				{products?.map((product: any) => {
					return (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} />
						</SwiperSlide>
					);
				})}

				{products?.map((product: any) => {
					return (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} />
						</SwiperSlide>
					);
				})}

				{products?.map((product: any) => {
					return (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
export default SlideProducts;
