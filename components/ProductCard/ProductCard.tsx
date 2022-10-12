import Image from "next/image";
import Link from "next/link";
import { FC, memo, useReducer, useEffect, useId } from "react";
import { Action } from "../../utils/types";

interface Props {
	product?: any;
}

type State = {
	productVariants: Array<any>;
	colors: Array<any>;
	sizes: Array<any>;
	thumbnails: Array<any>;
	indexThumbnail: number;
	indexProductVariant: number;
};

const reducers = (state: State, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return {
				...state,
				...payload,
			};
	}
};

const initialState: State = {
	productVariants: [],
	colors: [],
	sizes: [],
	thumbnails: [],
	indexThumbnail: 0,
	indexProductVariant: 0,
};

const ProductCard: FC<Props> = memo(({ product }) => {
	const [state, dispatch] = useReducer(reducers, initialState);
	const id: string = useId();

	useEffect(() => {
		let colors: Array<any> = [];
		let sizes: Array<any> = [];
		let thumbnails: Array<any> = [];
		product.productVariants.forEach((productVariant: any) => {
			colors = [...colors.filter((color: any) => color.code !== productVariant.color.code), productVariant.color];
			sizes = [...sizes.filter((size: any) => size.code !== productVariant.size.code), productVariant.size];
		});
		colors.forEach((color: any) => {
			thumbnails.push(product.productVariants.find((productVariant: any) => productVariant.color.code === color.code)?.thumbnails);
		});
		dispatch({ type: "", payload: { colors, sizes, thumbnails } });
	}, [product]);

	const handleClick = (index: number) => {
		dispatch({
			type: "",
			payload: {
				indexProductVariant: product.productVariants.findIndex((productVariant: any) => productVariant.color.code === state.colors[index].code),
			},
		});
	};

	console.log(state);

	if (!product) return <></>;
	return (
		<div className="rounded-lg overflow-hidden product-card">
			<Link style={{ paddingTop: "150%" }} className="h-0 overflow-hidden relative block w-full" href={`/san-pham/${product.slug}`}>
				<a>
					<Image
						id={id}
						style={{ height: "100%" }}
						className="absolute top-0 left-0 object-cover w-full align-top"
						loader={({ src }) => src}
						src={product.productVariants[state.indexProductVariant].thumbnails[state.indexThumbnail].path}
						alt=""
						height={180}
						width={130}
					/>
				</a>
			</Link>
			<div className="flex gap-2 mt-2">
				{state.thumbnails.map((list: any, index: number) => {
					return (
						<div
							key={list[0].path}
							style={{
								height: 28,
								width: 28,
							}}
							className="overflow-hidden rounded-full cursor-pointer"
							onClick={() => handleClick(index)}
						>
							<Image src={list[0].path} loader={({ src }) => src} className="object-cover object-center" height={28} width={28} alt="" />
						</div>
					);
				})}
			</div>
			<Link href={`/san-pham/${product.slug}`}>
				<a>{product.name}</a>
			</Link>
		</div>
	);
});
export default ProductCard;
