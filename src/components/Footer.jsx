/* eslint-disable react/prop-types */
import Separator from "./Separator";
export default function Footer({ children }) {
	return (
		<footer className="text-[10px] bg-[#1a103d] md:text-xs text-zinc-500 w-full pb-5">
			<Separator />
			<div className="flex justify-between items-center">{children}</div>
		</footer>
	);
}
