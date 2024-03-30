/* eslint-disable react/prop-types */
export default function List({ children, condition }) {
	return (
		<>
			{condition === 0 ? (
				<p className="text-xs mb-5 opacity-70 md:text-sm">
					Waiting for new to-dos...
				</p>
			) : (
				<ul className="w-full">{children}</ul>
			)}
		</>
	);
}
