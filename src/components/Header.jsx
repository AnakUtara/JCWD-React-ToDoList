/* eslint-disable react/prop-types */
export default function Header({ logo, children }) {
	return (
		<div className="flex items-center justify-center md:justify-between gap-0 w-full mb-5">
			<h2 className="w-fit font-gaba font-black text-3xl min-[375px]:text-4xl md:text-4xl uppercase">
				{logo}
			</h2>
			{children}
		</div>
	);
}
