import { FC, memo } from "react";
import { NavLink } from "react-router-dom";

interface Props {
	to: string;
	text: string;
}

const CategoryItem: FC<Props> = memo(({ to, text }) => {
	return (
		<li className="h-full">
			<NavLink
				to={to}
				className={({ isActive }) => (isActive ? "category-header-active text-blue-500" : "") + " hover:text-blue-500 relative block h-full"}
			>
				{text}
			</NavLink>
		</li>
	);
});
export default CategoryItem;
