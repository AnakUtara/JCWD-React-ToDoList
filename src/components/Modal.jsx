/* eslint-disable react/prop-types */
export default function Modal({
	id,
	title,
	children,
	modalFn,
	btnClass,
	btnIcon,
	btnIconClass,
	btnText = false,
}) {
	return (
		<>
			<button
				className={btnClass}
				onClick={() => {
					document.getElementById(id).showModal();
					modalFn && modalFn();
				}}
			>
				{btnText && <h2 className="text-lg font-bold hidden md:block">New</h2>}
				<span className={btnIconClass}>{btnIcon}</span>
			</button>
			<dialog id={id} className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>
					</form>
					<h3 className="mb-2 font-gaba font-bold">{title}</h3>
					{children}
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
}
