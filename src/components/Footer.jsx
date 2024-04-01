/* eslint-disable react/prop-types */
import Separator from "./Separator";
export default function Footer({ children }) {
	return (
		<footer className="bg-[#1a103d] text-[11px] sm:text-xs text-zinc-500 w-[768px] md:px-5 fixed bottom-0 pb-5">
			<Separator />
			<div className="flex justify-center gap-1 md:justify-between items-center">
				{children}
			</div>
		</footer>
	);
}
