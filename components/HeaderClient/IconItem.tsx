import { FC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
	to: string;
	count: number;
	icon: ReactNode;
	linkClassName?: string;
}
const IconItem: FC<Props> = memo(({ to, count, icon, linkClassName }) => {
	return (
		<li className="relative">
			<Link to={to} className={`text-xl ${linkClassName || ""}`}>
				{icon}
			</Link>
			{count > 0 && (
				<div
					className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-blue-500 text-white"
					style={{ fontSize: 9, lineHeight: "9px", borderRadius: "50%" }}
				>
					{count}
				</div>
			)}
		</li>
	);
});

export default IconItem;
