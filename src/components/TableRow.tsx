import { Note } from '../types/Note'

interface TableRow {
	n: Note
	handleEditClick: (id: number) => void
	handleDelete: (id: number) => void
	handleArchive: (id: number) => void
}

function TableRow ({handleEditClick, handleDelete,  handleArchive, n}: TableRow) { 
	 return (
		<tr key={n.id} note-archive={n.archive.toString()} className="border-b">
			<td>
				{n.category === 'Task' ? (
					<i className="fa fa-calendar-check-o fa"></i>
				) : n.category === 'Random Thought' ? (
					<i className="fa fa-comment fa"></i>
				) : n.category === 'Idea' ? (
					<i className="fa fa-lightbulb-o fa"></i>
				) : n.category === 'Quote' ? (
					<i className="fa fa-quote-left fa"></i>
				) : (
					 ''
				)}
			</td>
			<td>{n.name}</td>
			<td>{n.created}</td>
			<td>{n.category}</td>
			<td>{n.content}</td>
			<td>{n.dates}</td>
			<td>
				<button onClick={() => handleEditClick(n.id)}>
				 	<i className="fa fa-edit"></i>
				</button>
			</td>
			<td>
				<button onClick={() => handleDelete(n.id)}>
					<i className="fa fa-trash"></i>
				</button>
			</td>
			<td>
			<button onClick={() => handleArchive(n.id)}>
				<i className="fa fa-archive"></i>
			</button>
			</td>
		</tr>
	)
}

export default TableRow
