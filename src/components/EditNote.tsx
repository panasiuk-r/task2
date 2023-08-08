import { Note } from '../types/Note'

interface EditNote  {
	n: Note
	handleEditNote: (event: React.FormEvent<HTMLFormElement>, id: number) => void
	handleEditCancel: (id: number) => void
}

function EditNote ({handleEditNote, handleEditCancel, n}: EditNote) {
	return (	
		<tr key={n.id} note-archive={n.archive.toString()} className="border-b">
			<td colSpan={9}>
				<form onSubmit={(event) => handleEditNote(event, n.id)} className="flex justify-between px-8 py-1.5">
					<input name="name" defaultValue={n.name} className="border border-gray-400 hover:border-gray-500 rounded py-0.5 px-2 w-full mx-3" required />
					<select name="category" defaultValue={n.category} className="border bg-white border-gray-400 hover:border-gray-500 rounded px-2 py-1 w-full mx-3" required>
						<option value="Task">Task</option>
						<option value="Random Thought">Random Thought</option>
						<option value="Idea">Idea</option>
						<option value="Quote">Quote</option>
					</select>
					<input name="content" defaultValue={n.content} className="border border-gray-400 hover:border-gray-500 rounded py-0.5 px-2 w-full mx-3"  required />
					<div className="flex">
						<button type="submit" className="transition delay-100 bg-emerald-500 hover:bg-emerald-700 text-white front-bold rounded py-1 px-7 mx-4 w-full">Edit</button>
						<button onClick={() => handleEditCancel(n.id)} className="transition delay-100 text-emerald-500 hover:text-emerald-700 w-full" >Cancel</button>
					</div>
				 </form>
			</td>
		</tr>
	)
}

export default EditNote
