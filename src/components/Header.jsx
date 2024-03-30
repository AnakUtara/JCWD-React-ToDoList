/* eslint-disable react/prop-types */
export default function Header({ logo, children }) {
	return (
		<div className="flex items-center justify-between gap-0 w-full mb-5">
			<h2 className="w-fit font-gaba font-black min-[420px]:text-3xl sm:text-4xl uppercase min-[320px]:text-2xl">
				{logo}
			</h2>
			<div className="divider divider-horizontal max-[320px]:ml-0 before:bg-cyan-400 after:bg-cyan-400"></div>
			{children}
		</div>
	);
}
