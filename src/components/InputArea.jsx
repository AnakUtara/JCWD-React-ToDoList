/* eslint-disable react/prop-types */
export default function InputArea({ state, inputHandler, clickHandler }) {
	const [newToDo, isInputEmpty] = state;
	return (
		<div className="grow">
			<div className="flex items-center justify-between gap-2">
				<input
					className="input input-md input-bordered grow font-gaba focus:input-info focus:outline-0 placeholder:text-sm"
					placeholder={isInputEmpty ? "Got nothing to do?" : "Add To Do..."}
					type="text"
					name="title"
					value={newToDo}
					onChange={inputHandler}
				/>
				<button
					className="btn btn-md btn-square btn-accent hover:bg-yellow-200"
					onClick={clickHandler}
				>
					<span className="material-symbols-outlined font-bold text-violet-950">
						add
					</span>
				</button>
			</div>
		</div>
	);
}
