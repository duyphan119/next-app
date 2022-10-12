import { AiOutlineUser } from "react-icons/ai";
import { BsBag, BsSuitHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartState } from "../../redux/reducers/cartReducer";
import CategoryItem from "./CategoryItem";
import IconItem from "./IconItem";
import SearchInput from "./SearchInput";
import ToggleSidebar from "./ToggleSidebar";

const categories: any = [
	{
		id: 1,
		name: "Hàng mới về",
		alias: "hang-moi-ve",
	},
	{
		id: 2,
		name: "Bộ sưu tập",
		alias: "bo-suu-tap",
		children: [
			{
				id: 3,
				name: "BST 1",
				alias: "bst-1",
			},
			{
				id: 4,
				name: "BST 2",
				alias: "bst-2",
				children: [
					{
						id: 5,
						name: "BST 3",
						alias: "bst-3",
					},
					{
						id: 6,
						name: "BST 4",
						alias: "bst-4",
					},
				],
			},
		],
	},
];

const HeaderClient = () => {
	const { cart } = useSelector(cartState);
	return (
		<header className="fixed top-0 px-4 left-0 right-0 bg-white h-20 flex items-center justify-between z-20">
			<div className="flex-1 lg:block hidden text-center">
				<SearchInput />
			</div>
			<div className="h-full lg:flex-1 flex items-center flex-col justify-between">
				<div className="flex-1 flex items-center text-2xl font-bold text-blue-500 lg:h-14 h-20">
					<Link to="/">FASHION</Link>
				</div>
				<ul className="h-6 lg:flex hidden items-center justify-center gap-5 mb-1">
					<CategoryItem to="/san-pham/category/sale" text="Sale" />
					<CategoryItem to="/san-pham/category/nam" text="Nam" />
					<CategoryItem to="/san-pham/category/nu" text="Nữ" />
				</ul>
			</div>
			<ul className="flex-1 flex justify-end items-center gap-4">
				<IconItem to="/thong-tin-tai-khoan" icon={<AiOutlineUser />} linkClassName="text-2xl" count={0} />
				<IconItem to="/san-pham-yeu-thich" icon={<BsSuitHeart />} count={0} />
				<IconItem to="/gio-hang" icon={<BsBag />} count={cart.count} />
				<ToggleSidebar categories={categories} />
			</ul>
		</header>
	);
};
export default HeaderClient;
