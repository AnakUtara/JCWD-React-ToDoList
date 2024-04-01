/* eslint-disable react/prop-types */
export default function Counter({ title, state }) {
	return (
		<h2 className="bg-[#1a103d] font-gaba font-semibold tracking-widest text-xl fixed left-3 bottom-5 z-20 shadow-sm shadow-black md:static md:shadow-none border-2 border-yellow-400 px-4 py-2 rounded-full">
			{title} <span className="text-[#45d4ff]">{state}</span>
		</h2>
	);
}
