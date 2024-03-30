import { useState } from "react";
/* eslint-disable react/prop-types */
export default function ListItem({ data, setState }) {
	const [isDone, setIsDone] = useState(false);
	const [totalDone, setTotalDone, list, setList] = setState;

	function handleOnChecked() {
		const revDone = !isDone;
		setIsDone(revDone);
		revDone ? setTotalDone(totalDone + 1) : setTotalDone(totalDone - 1);
	}

	function handleDelete() {
		setList(list.filter((item) => item.id !== data.id));
		totalDone !== 0 && setTotalDone(totalDone - 1);
	}

	return (
		<>
			<li className="flex justify-between items-center gap-3 mt-5 first:mt-0">
				<input
					className="checkbox checkbox-md checkbox-success bg-base-300"
					type="checkbox"
					name="to-do"
					id="todo"
					checked={isDone}
					onChange={handleOnChecked}
				/>
				<label
					className={`grow text-xs md:text-base ${isDone && "line-through"}`}
				>
					{data.title}
				</label>
				<button
					className="group/delete cursor-pointer btn btn-sm md:btn-md border-red-500 hover:bg-red-500 bg-base-300 btn-outline btn-square"
					onClick={handleDelete}
				>
					<span className="material-symbols-outlined text-xl font-light align-middle text-red-500 group-hover/delete:text-white md:text-2xl">
						delete
					</span>
				</button>
			</li>
		</>
	);
}
