/* eslint-disable react/prop-types */
export default function Footer({ children }) {
	return (
		<footer className="text-[10px] md:text-xs text-zinc-500 flex justify-between items-center w-full relative -translate-y-4 md:-translate-y-5">
			{children}
		</footer>
	);
}
