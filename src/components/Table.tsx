import React from 'react'

import { Note } from '../types/Note'
import EditNote from './EditNote'
import TableRow from './TableRow'

interface TableProps {
	notes: Note[]
	archive: boolean
	editCounter: number[]
	handleEditClick: (id: number) => void
	handleDelete: (id: number) => void
	handleArchive: (id: number) => void
	handleArchiveDisplay: () => void
	handleEditNote: (event: React.FormEvent<HTMLFormElement>, id: number) => void
	handleEditCancel: (id: number) => void 
}

function Table ({notes, archive, editCounter, handleEditClick, handleDelete,  handleArchive, handleArchiveDisplay, handleEditNote, handleEditCancel}: TableProps) {
	return (
		<div>
			<table className="w-full border-collapse border">
				<thead>
					<tr>
						<th colSpan={2} className="px-4 py-2 text-left bg-gray-200 text-center">Name</th>
						<th className="px-4 py-2 text-left bg-gray-200">Created</th>
						<th className="px-4 py-2 text-left bg-gray-200">Category</th>
						<th className="px-4 py-2 text-left bg-gray-200">Content</th>
						<th className="px-4 py-2 text-left bg-gray-200">Dates</th>
						<th colSpan={3} className="px-4 py-2 text-left bg-gray-200 text-right">
							<button onClick={handleArchiveDisplay} className="btn">
								<i className="fa fa-archive"></i>
							</button>
						</th>
					</tr>
				</thead>

				<tbody>
					{notes.filter(n => n.archive === archive).map(n => 				
						<React.Fragment key={n.id}>
							{editCounter.includes(n.id) ? (
								<EditNote handleEditNote={handleEditNote} handleEditCancel={handleEditCancel} n={n} />
							) : (
	  						<TableRow handleEditClick={handleEditClick} handleDelete={handleDelete}  handleArchive={handleArchive} n={n} /> 
							)}
						</React.Fragment>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default Table
