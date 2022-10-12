export const formatPrice = (price: number): string => {
	if (!price) return "0 VNĐ";
	return new Intl.NumberFormat("it-IT", { style: "currency", currency: "VND" }).format(price).replace("D", "Đ");
};
export const formatPriceNoUnit = (price: number): string => {
	if (!price) return "0";
	return new Intl.NumberFormat("it-IT", { style: "currency", currency: "VND" }).format(price).split(" ")[0];
};

export const formatDate = (input: string | number | Date): string => {
	try {
		const date = new Date(input);
		const yyyy = date.getFullYear();
		const MM = date.getMonth() + 1;
		const dd = date.getDate();
		return `${dd < 10 ? "0" + dd : dd}-${MM < 10 ? "0" + MM : MM}-${yyyy}`;
	} catch (error) {}
	return "" + input;
};
export const formatTime = (input: string | number | Date): string => {
	try {
		const date = new Date(input);
		const hh = date.getHours();
		const mm = date.getMinutes();
		const ss = date.getSeconds();
		return `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}:${ss < 10 ? "0" + ss : ss}`;
	} catch (error) {}
	return "" + input;
};
export const formatDateTime = (input: string | number | Date): string => {
	try {
		return formatDate(input) + " " + formatTime(input);
	} catch (error) {}
	return "" + input;
};
