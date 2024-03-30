/* eslint-disable react/prop-types */
export default function Header({ logo, children }) {
	return (
		<div className="flex items-center justify-between gap-0 w-full mb-5">
			<h2 className="font-gaba font-black text-xl uppercase md:text-3xl">
				{logo}
			</h2>
			<div className="divider divider-horizontal before:bg-cyan-400 after:bg-cyan-400"></div>
			{children}
		</div>
	);
}
