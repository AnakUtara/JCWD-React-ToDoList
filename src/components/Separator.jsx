/* eslint-disable react/prop-types */
export default function Separator({ margin = "mb-5" }) {
	return (
		<hr
			className={`border-[1.45px] border-solid border-fuchsia-600 w-full ${margin}`}
		/>
	);
}
