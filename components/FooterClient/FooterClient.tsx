import facebookSvg from "../../assets/facebook.svg";
import youtubeSvg from "../../assets/youtube.svg";
import zaloSvg from "../../assets/zalo.svg";
import insPng from "../../assets/icon-mxh-ins.png";
import tictokPng from "../../assets/icon-mxh-tt.png";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";
const FooterClient = () => {
	return (
		<footer className="bg-blue-300 px-4 py-4 ">
			<div className="w-full flex flex-col lg:flex-row justify-between gap-4">
				<div className="lg:flex-1">
					<div className="text-2xl text-blue-500 font-bold">FASHION</div>
					<div className="my-2">
						Tự hào là thương hiệu Việt, không chỉ mang đến những sản phẩm đẹp mà còn trao gửi những Giá trị thật - Hạnh phúc đích thực đến tận tay
						khách hàng.
					</div>
					<ul className="flex gap-1">
						<li className="">
							<a href="/#">
								<Image width={28} height={28} src={facebookSvg} alt="" />
							</a>
						</li>
						<li className="">
							<a href="/#">
								<Image width={28} height={28} src={youtubeSvg} alt="" />
							</a>
						</li>
						<li className="">
							<a href="/#">
								<Image width={28} height={28} src={zaloSvg} alt="" />
							</a>
						</li>
						<li className="">
							<a href="/#">
								<Image width={28} height={28} src={insPng} alt="" />
							</a>
						</li>
						<li className="">
							<a href="/#">
								<Image width={28} height={28} src={tictokPng} alt="" />
							</a>
						</li>
					</ul>
				</div>
				<div className="lg:flex-1">
					<div className="uppercase font-bold">Danh mục</div>
					<ul className="flex flex-wrap mt-2 flex-col">
						<li className="">
							<Link className="hover:underline hover:text-blue-500" href="/san-pham/category/sale">
								<a>Sale</a>
							</Link>
						</li>
						<li className="">
							<Link className="hover:underline hover:text-blue-500" href="/san-pham/category/nam">
								<a>Nam</a>
							</Link>
						</li>
						<li className="">
							<Link className="hover:underline hover:text-blue-500" href="/san-pham/category/nu">
								<a>Nữ</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className="lg:flex-1">
					<div className="uppercase font-bold">Hỏi đáp</div>
					<ul className="flex flex-col mt-2">
						<li className="">
							<a href="/#" className="hover:underline hover:text-blue-500">
								Hướng dẫn đặt hàng
							</a>
						</li>
						<li className="">
							<a href="/#" className="hover:underline hover:text-blue-500">
								Chính sách giao hàng
							</a>
						</li>
						<li className="">
							<a href="/#" className="hover:underline hover:text-blue-500">
								Chính sách bảo mật
							</a>
						</li>
						<li className="">
							<a href="/#" className="hover:underline hover:text-blue-500">
								Liên hệ
							</a>
						</li>
					</ul>
				</div>
				<div className="lg:flex-1">
					<div className="uppercase font-bold">Cách thức thanh toán</div>
					<div className="flex gap-1 mt-2">
						<Image width={28} height={28} src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-payment/momo.svg" alt="" />
						<Image width={28} height={28} src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-payment/money.svg" alt="" />
					</div>
					<div className="uppercase font-bold mt-6">Đăng ký nhận thông báo</div>
					<div className="flex mt-1 rounded-3xl pl-4 border lg:w-72 w-full border-black border-solid bg-white overflow-hidden">
						<input type="text" className="border-none text-sm outline-none bg-inherit flex-1" placeholder="Email của bạn" />
						<Button buttonClassName="m-1 py-1 text-sm rounded-3xl px-2 uppercase bg-black text-white border-black hover:border-black hover:bg-black hover:text-white">
							Gửi ngay
						</Button>
					</div>
				</div>
			</div>
			<div className="w-full my-4 border border-solid border-black"></div>
			<div className="flex justify-between items-center">
				<div className="">©2022. Công ty cổ phẩn FASHION. All RIGHTS RESERVED</div>
				<div className="">
					<Image src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gov.svg" height="48" width="90" alt="" />
				</div>
			</div>
		</footer>
	);
};
export default FooterClient;
