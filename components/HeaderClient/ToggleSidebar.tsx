import { FC, memo } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useComponentVisible } from "../../hooks/useComponentVisible";
import { authState } from "../../redux/reducers/authReducer";
import CategoryItemSidebar from "./CategoryItemSidebar";
import SearchInput from "./SearchInput";

interface Props {
	categories?: Array<any>;
}

const ToggleSidebar: FC<Props> = memo(({ categories }) => {
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
	const { profile } = useSelector(authState);

	const handleLogout = () => {
		console.log("logout");
		setIsComponentVisible(false);
	};

	return (
		<>
			<div onClick={() => setIsComponentVisible(true)} className="flex lg:hidden justify-end items-center cursor-pointer">
				<AiOutlineMenu className="text-2xl" />
			</div>
			<div
				ref={ref}
				className={`sidebar-client fixed top-0 left-0 w-80 bottom-0 bg-slate-50 ${
					isComponentVisible ? "translate-x-0" : "-translate-x-full"
				} transition-all ease-linear duration-100`}
			>
				<div className="flex items-center h-20">
					<div className="flex items-center flex-1 justify-center text-2xl font-bold text-blue-500 relative mx-2">
						<Link to="/">FASHION</Link>
						<div
							className="cursor-pointer text-black hover:text-red-500 absolute top-1/2 right-0 -translate-y-1/2"
							onClick={() => setIsComponentVisible(false)}
						>
							<AiOutlineClose className="text-3xl" />
						</div>
					</div>
				</div>
				{profile ? (
					<div className="flex justify-between items-center mx-2">
						<div>
							Xin chào, <span>Duy Phan</span>
						</div>
						<div onClick={handleLogout} className="underline text-blue-500 cursor-pointer">
							Đăng xuất
						</div>
					</div>
				) : (
					<div className="flex justify-center gap-4 items-center mx-2">
						<Link
							to="/dang-nhap"
							style={{ minWidth: 100 }}
							className="border text-center hover:bg-white hover:text-blue-500 border-blue-500 border-solid px-2 py-1 bg-blue-700 text-white"
						>
							Đăng nhập
						</Link>
						<Link
							to="/dang-ky"
							style={{ minWidth: 100 }}
							className="border text-center hover:bg-white hover:text-blue-500 border-blue-500 border-solid px-2 py-1 bg-blue-700 text-white"
						>
							Đăng ký
						</Link>
					</div>
				)}

				<div className="m-2">
					<SearchInput formClassName="w-full" />
				</div>
				<ul className="uppercase mx-2">
					{categories?.map((category: any) => {
						return <CategoryItemSidebar key={category.id} category={category} />;
					})}
				</ul>
			</div>
		</>
	);
});
export default ToggleSidebar;
