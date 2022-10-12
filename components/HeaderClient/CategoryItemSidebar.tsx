import { FC, memo, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

interface Props {
	category?: any;
	isChild?: boolean;
}
const CategoryItemSidebar: FC<Props> = memo(({ category, isChild }) => {
	const [state, setState] = useState<boolean>(false);
	const handleClick = (e: any) => {
		console.log("handleClick");
		setState((prev) => !prev);
	};

	if (!category) return <></>;
	return (
		<li className="">
			<div className={`flex items-center py-1 ${isChild ? "text-gray-600" : "border-b border-gray-500 border-solid "} cursor-pointer`}>
				<Link to={`/san-pham/category/${category.alias}`} className="flex-1 hover:text-blue-500">
					{category.name}
				</Link>
				<div onClick={handleClick}>{category.children && category.children.length > 0 && (state ? <AiOutlineMinus /> : <AiOutlinePlus />)}</div>
			</div>
			{category.children && state && (
				<ul className="uppercase mx-2">
					{category.children.map((category: any) => {
						return <CategoryItemSidebar isChild={true} key={category.id} category={category} />;
					})}
				</ul>
			)}
		</li>
	);
});
export default CategoryItemSidebar;
