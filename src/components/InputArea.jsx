/* eslint-disable react/prop-types */
export default function InputArea({
	state,
	inputHandler,
	isEdit = false,
	onSubmit,
	children,
}) {
	const [newToDo, isInputEmpty] = state;
	return (
		<div className="grow">
			<form
				className="flex flex-wrap items-center justify-between gap-2"
				onSubmit={onSubmit}
			>
				{isEdit ? (
					<input
						className="input input-md max-[320px]:w-[80%] input-bordered grow font-gaba focus:input-info focus:outline-0 placeholder:text-sm"
						placeholder={isInputEmpty ? "Can't leave me empty now..." : ""}
						type="text"
						name="title"
						value={newToDo}
						onChange={inputHandler}
					/>
				) : (
					<input
						className="input input-md max-[320px]:w-[80%] input-bordered grow font-gaba focus:input-info focus:outline-0 placeholder:text-sm"
						placeholder={
							isInputEmpty ? "Got nothing to do?" : "Add Something To Do..."
						}
						type="text"
						name="title"
						value={newToDo}
						onChange={inputHandler}
					/>
				)}
				{children}
			</form>
		</div>
	);
}
