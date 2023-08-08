import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes";
const createNote = (add) => {
	return(
		<Note 
		key= {add.id}
		title= {add.title}
		content= {add.content}
		/>
	)
}

const App = () => {
	return(
	<div>
		<Header />
		{notes.map(createNote)}
		<Footer />
	</div>
	); 
}

export default App;