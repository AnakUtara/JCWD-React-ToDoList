/* eslint-disable react/prop-types */
export default function Counter({ title, state }) {
	return (
		<div className="divider my-5 before:bg-fuchsia-600 after:bg-fuchsia-600 [&:not(:empty)]:gap-0">
			<h2 className="font-gaba font-semibold tracking-widest text-md md:text-lg border-2 border-yellow-400 px-4 py-2 rounded-full">
				{title} <span className="text-[#45d4ff]">{state}</span>
			</h2>
		</div>
	);
}
