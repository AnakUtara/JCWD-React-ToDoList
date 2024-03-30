import { useState } from "react";
import { toDo } from "./todolist.json";
import Separator from "./components/Separator";
import InputArea from "./components/InputArea";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
	}

	return (
		<>
			<div className="max-w-[768px] mx-auto my-0">
				<div className="flex flex-col items-center justify-center p-5 text-white">
					<Separator />
					<Header logo={"Chores To Do List"}>
						<InputArea
							state={[newToDo, isInputEmpty]}
							inputHandler={handleInput}
							clickHandler={handleAddToDo}
						/>
					</Header>
					<Separator />
					<List condition={isListNotEmpty}>
						{list.map((item) => (
							<ListItem
								key={item.id}
								data={item}
								setState={[totalDone, setTotalDone, list, setList]}
							/>
						))}
					</List>
					<Counter title={"DONE:"} state={totalDone} />
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
