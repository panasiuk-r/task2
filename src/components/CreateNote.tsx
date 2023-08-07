interface CreateNoteProps {
	handleFormDisplay: () => void
	formDisplay: boolean
	createNote: (event: React.FormEvent<HTMLFormElement>) => void
}

function CreateNote ({handleFormDisplay, formDisplay, createNote}: CreateNoteProps) {
	return (
		<div className="w-full max-w-xs">
			<button onClick={handleFormDisplay} className="transition delay-100 bg-emerald-500 hover:bg-emerald-700 text-white front-bold rounded py-1 px-4  m-6">Create Note</button>
			{formDisplay && (
				<form onSubmit={createNote} className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<h1>New Note</h1>
					<label htmlFor="name" className="text-gray-700 text-sm font-bold mb-2">Name</label>
					<input name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
					<label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2"><b>Category</b></label>
					<select name="category" className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required>
						<option value="">Select a category</option>
						<option value="Task">Task</option>
						<option value="Random Thought">Random Thought</option>
						<option value="Idea">Idea</option>
						<option value="Quote">Quote</option>
					</select>
					<label htmlFor="content" className="text-gray-700 text-sm font-bold mb-2"><b>Content</b></label>
					<input name="content" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
					<div className="flex">
						<button type="submit" className="transition delay-100 bg-emerald-500 hover:bg-emerald-700 text-white front-bold rounded p-3 my-4 w-full">Create</button>
						<button onClick={handleFormDisplay} className="transition delay-100 text-emerald-500 hover:text-emerald-700 p-3 my-4 w-full">Cancel</button>
					</div>
				</form>
			)}
		</div>
	)
}

export default CreateNote
