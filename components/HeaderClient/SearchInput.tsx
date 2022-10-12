import { ChangeEvent, CSSProperties, FC, FocusEvent, FormEvent, useEffect, useReducer, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../config/api";
import { SUCCESS_CODE, SUCCESS_MESSAGE } from "../../constants";
import { formatPrice } from "../../utils/helpers";
import { Action } from "../../utils/types";
import SearchResult from "./SearchResult";
import products from "../../product.json";

interface Props {
	formClassName?: string;
	inputClassName?: string;
	iconClassName?: string;
	formStyle?: CSSProperties;
	inputStyle?: CSSProperties;
	iconStyle?: CSSProperties;
}

type State = {
	keyword: string;
	products: Array<any>;
	isVisible: boolean;
};

const initialState: State = {
	keyword: "",
	products: [],
	isVisible: false,
};

const reducers = (state: State, action: Action) => {
	const { type, payload } = action;
	switch (type) {
		default: {
			return { ...state, ...payload };
		}
	}
};

const SearchInput: FC<Props> = ({ formClassName, inputClassName, iconClassName, formStyle, inputStyle, iconStyle }) => {
	const [state, dispatch] = useReducer(reducers, initialState);
	const ref = useRef<HTMLInputElement>(null);

	const {
		refetch,
		isLoading,
		error,
		data: res,
		isSuccess,
	} = useQuery([state.keyword], () => fetchData().get("product?q=" + state.keyword), {
		enabled: false,
		refetchOnWindowFocus: false,
	});
	console.log("HeaderClient/SearchInput -- log:", { isLoading, error, res });
	const navigate = useNavigate();

	useEffect(() => {
		const timerId = setTimeout(() => {
			state.keyword ? handleSearch() : dispatch({ type: "Search", payload: { products: [] } });
		}, 500);
		return () => clearTimeout(timerId);
	}, [state.keyword]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: "InputChange", payload: { keyword: e.target.value } });
	};

	const handleNavigate = () => {
		navigate(`/search?q=${state.keyword}`);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		handleNavigate();
	};

	const handleSearch = async () => {
		console.log(`search product with keyword: ${state.keyword}`);
		// refetch();
		dispatch({ type: "Search", payload: { products } });
	};

	useEffect(() => {
		if (isSuccess && res) {
			const { code, message, data } = res.data;
			if (code === SUCCESS_CODE && message === SUCCESS_MESSAGE) {
				dispatch({ type: "Search", payload: { products: data.items } });
			}
		}
	}, [isSuccess, res]);

	const handleBlur = () => {
		if (state.isVisible === true) dispatch({ type: "Blur", payload: { isVisible: false } });
	};

	const handleFocus = () => {
		// if (ref.current === null) return;
		// ref.current.focus();
		if (state.isVisible === false) dispatch({ type: "Blur", payload: { isVisible: true } });
	};

	console.log(state);

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={`border w-60 border-black flex items-center  gap-1  rounded-sm relative ${formClassName || ""}`}
				style={formStyle || {}}
				// onClick={handleFocus}
			>
				<input
					type="search"
					className={`flex-1 outline-none pl-1.5 border-none py-0.5 ${inputClassName || ""}`}
					style={inputStyle || {}}
					placeholder="Tìm ở đây"
					value={state.keyword}
					onChange={handleChange}
					ref={ref}
					onBlur={handleBlur}
					onFocus={handleFocus}
				/>
				<ImSearch className={`mx-1.5  ${iconClassName || ""}`} onClick={handleNavigate} style={iconStyle || {}} />
				{state.isVisible && state.products.length > 0 && (
					<div className="absolute top-full left-0 right-0 bg-white mt-px border border-white border-solid">
						{state.products.map((product: any) => {
							return <SearchResult key={product.id} product={product} />;
						})}
					</div>
				)}
			</form>
		</>
	);
};

export default SearchInput;
