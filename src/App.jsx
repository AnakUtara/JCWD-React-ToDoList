import { useState } from "react";
import { toDo } from "./todolist.json";
import Separator from "./components/Separator";
import InputArea from "./components/InputArea";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
	const [list, setList] = useState(toDo);
	const [totalDone, setTotalDone] = useState(0);
	const [newToDo, setNewToDo] = useState("");
	const [isInputEmpty, setIsInputEmpty] = useState(false);
	const isListNotEmpty = list.length;

	function handleInput(e) {
		setNewToDo(e.target.value);
	}

	function handleAddToDo() {
		isListNotEmpty >= 0 &&
			newToDo.length &&
			setList([
				...list,
				{
					id: isListNotEmpty === 0 ? 1 : list[isListNotEmpty - 1].id + 1,
					title: newToDo,
				},
			]);
		!newToDo.length ? setIsInputEmpty(true) : setIsInputEmpty(false);
		setNewToDo("");
		document.getElementById("input-modal").close();
	}

	return (
		<>
			<div className="max-w-[768px] mx-auto my-0">
				<div className="flex flex-col items-center justify-center p-5 pt-0 text-white">
					<header className="w-full sticky top-0 bg-[#1a103d] mb-5">
						<Separator margin="my-5" />
						<Header logo={"Chores To Do List"}>
							<div className="flex gap-5">
								<Counter title={"DONE:"} state={totalDone} />
								<Modal
									id={"input-modal"}
									title={"Add New To Do:"}
									modalFn={() => {
										setNewToDo("");
										setIsInputEmpty(false);
									}}
									btnClass={
										"fixed bottom-10 right-3 z-10 md:static md:flex items-center btn max-[425px]:btn-square btn-md btn-accent text-violet-950 hover:bg-yellow-200 shadow-sm shadow-black md:shadow-none"
									}
									btnIcon={"add"}
									btnIconClass={"material-symbols-outlined font-bold"}
									btnText={true}
								>
									<InputArea
										state={[newToDo, isInputEmpty]}
										inputHandler={handleInput}
										isEdit={false}
									>
										<button
											className="btn btn-block btn-md sm:btn-square btn-accent hover:bg-yellow-200"
											onClick={handleAddToDo}
										>
											<span className="material-symbols-outlined font-bold text-violet-950">
												add
											</span>
										</button>
									</InputArea>
								</Modal>
							</div>
						</Header>
						<Separator margin="mb-0" />
					</header>
					<List condition={isListNotEmpty}>
						{list.map((item) => (
							<ListItem
								key={item.id}
								data={item}
								setState={[totalDone, setTotalDone, list, setList]}
							/>
						))}
					</List>
					<Separator />
					<Footer>
						<p>Copyright, Riady</p>
						<p>&copy; {new Date().getFullYear()}</p>
					</Footer>
				</div>
			</div>
		</>
	);
}

export default App;
