import { useState } from "react";
import Modal from "./Modal";
import InputArea from "./InputArea";
/* eslint-disable react/prop-types */
export default function ListItem({ data, setState }) {
	const [totalDone, setTotalDone, list, setList] = setState;
	const [isDone, setIsDone] = useState(false);
	const [edit, setEdit] = useState(data.title);
	const [isInputEmpty, setIsInputEmpty] = useState(false);

	function handleOnChecked() {
		const revDone = !isDone;
		setIsDone(revDone);
		revDone ? setTotalDone(totalDone + 1) : setTotalDone(totalDone - 1);
	}

	function handleDelete() {
		setList(list.filter((item) => item.id !== data.id));
		totalDone !== 0 && setTotalDone(totalDone - 1);
	}

	function handleEdit(e) {
		setEdit(e.target.value);
	}

	function handleSubmitEdit(e) {
		e.preventDefault();
		const tmp = [...list];
		!edit.length ? setIsInputEmpty(true) : setIsInputEmpty(false);
		const i = tmp.findIndex((item) => item.id === data.id);
		list.length >= 0 &&
			edit.length &&
			tmp.splice(i, 1, { id: data.id, title: edit });
		setList(tmp);
		edit.length && document.getElementById("edit-modal" + data.id).close();
	}

	return (
		<>
			<li className="flex justify-between items-center gap-3 mt-5 first:mt-0 last:mb-5">
				<input
					className="checkbox checkbox-md checkbox-success bg-base-300"
					type="checkbox"
					name="to-do"
					id={data.id}
					checked={isDone}
					onChange={handleOnChecked}
				/>
				<label
					htmlFor={data.id}
					className={`grow text-xs md:text-base ${isDone && "line-through"}`}
				>
					{data.title}
				</label>
				{isDone ? (
					<button className="btn btn-sm md:btn-md btn-disabled btn-square shadow-inner shadow-black">
						<span className="material-symbols-outlined text-xl font-light md:text-2xl">
							edit
						</span>
					</button>
				) : (
					<Modal
						id={"edit-modal" + data.id}
						title={"Edit To Do:"}
						modalFn={() => setEdit(data.title)}
						btnClass={
							"group/edit cursor-pointer btn btn-sm md:btn-md border-cyan-500 hover:bg-cyan-500 bg-base-300 btn-outline btn-square"
						}
						btnIcon={"edit"}
						btnIconClass={
							"material-symbols-outlined text-xl font-light align-middle text-cyan-500 group-hover/edit:text-white md:text-2xl"
						}
						btnText={false}
					>
						<InputArea
							state={[edit, isInputEmpty]}
							inputHandler={handleEdit}
							onSubmit={handleSubmitEdit}
							isEdit={true}
						>
							<button className="btn btn-block btn-md sm:btn-square btn-secondary hover:bg-cyan-200">
								<span className="material-symbols-outlined font-light text-violet-950">
									edit
								</span>
							</button>
						</InputArea>
					</Modal>
				)}
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
