/* eslint-disable react/prop-types */
export default function Modal({ id, title, children, modalFn }) {
	return (
		<>
			<button
				className="fixed bottom-5 right-3 z-10 md:static md:flex items-center btn max-[425px]:btn-square btn-md btn-accent text-violet-950 hover:bg-yellow-200 shadow-sm shadow-black md:shadow-none"
				onClick={() => {
					document.getElementById("input-modal").showModal();
					modalFn();
				}}
			>
				<h2 className="text-lg font-bold hidden md:block">New</h2>
				<span className="material-symbols-outlined font-bold">add</span>
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
