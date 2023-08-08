interface ArchiveProps {
	categoryCounts: { [category: string]: { archived: number; unarchived: number } }
}

function Archive ({categoryCounts}: ArchiveProps) {
	return (
		<div>
			<table className="w-full border-collapse border">
				<thead>
					<tr>
						<th colSpan={2} className="px-4 py-2 text-left bg-gray-200 text-center">Category</th>
						<th className="px-4 py-2 text-left bg-gray-200 text-center">Archived</th>
						<th className="px-4 py-2 text-left bg-gray-200 text-center">Unarchived</th>
					</tr>
				</thead>
				<tbody>	
					{Object.keys(categoryCounts).map((category) => (
						<tr key={category} className="border-b">
							<td>
								{category === 'Task' ? (
									<i className="fa fa-calendar-check-o fa"></i>
								) : category === 'Random Thought' ? (
									<i className="fa fa-comment fa"></i>
								) : category === 'Idea' ? (
									<i className="fa fa-lightbulb-o fa"></i>
								) : category === 'Quote' ? (
									<i className="fa fa-quote-left fa"></i>
								) : (
									''
								)}
							</td>

							<td>{category}</td>
							<td className="text-center">{categoryCounts[category].archived || 0}</td>
							<td className="text-center">{categoryCounts[category].unarchived || 0}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Archive
