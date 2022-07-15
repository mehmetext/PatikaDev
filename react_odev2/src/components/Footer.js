export default function Footer({
	activeCount,
	completedCount,
	clearCompleteds,
	showingType,
	setShowingType,
}) {
	if (activeCount + completedCount < 1) return;

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{activeCount}</strong> items left
			</span>

			<ul className="filters">
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							setShowingType("all");
						}}
						href="#/"
						className={showingType === "all" ? "selected" : ""}
					>
						All
					</a>
				</li>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							setShowingType("actives");
						}}
						href="#/"
						className={showingType === "actives" ? "selected" : ""}
					>
						Active
					</a>
				</li>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							setShowingType("completeds");
						}}
						className={
							showingType === "completeds" ? "selected" : ""
						}
						href="#/"
					>
						Completed
					</a>
				</li>
			</ul>

			<button
				onClick={clearCompleteds}
				className={
					"clear-completed " + (completedCount < 1 ? "hidden" : "")
				}
			>
				Clear completed
			</button>
		</footer>
	);
}
