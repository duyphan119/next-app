import { useDocumentTitle } from "../../hooks/useDocumentTitle";

type Props = {
	title: string;
	label?: string;
};

const TitleLayoutProfile = ({ title, label }: Props) => {
	useDocumentTitle(title);
	return <div className="font-bold text-2xl">{label || title}</div>;
};

export default TitleLayoutProfile;
