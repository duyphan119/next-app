import { memo } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

type Props = {
	product?: any;
};

const SearchResult = ({ product }: Props) => {
	if (!product) return <></>;
	return (
		<Link to={`/san-pham/${product.slug}`} className="flex p-1">
			<div className="h-12 w-10">
				<img src={product.productVariants[0].thumbnails[0].path} alt="" className="h-12 w-10 object-cover object-top" />
			</div>
			<div className="ml-1 flex flex-col items-start justify-between">
				<div className="hover:text-blue-500 text-sm">{product.name}</div>
				<div className="text-xs">
					<span className="text-red-500 font-medium">{formatPrice(product.productVariants[0].newPrice)}</span>
					{product.productVariants[0].price !== product.productVariants[0].newPrice && (
						<span className="line-through text-gray-500 ml-2">{formatPrice(product.productVariants[0].price)}</span>
					)}
				</div>
			</div>
		</Link>
	);
};

export default memo(SearchResult);
