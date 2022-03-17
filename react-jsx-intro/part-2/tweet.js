function Tweet(props) {
	return (
		<div>
			<span>{props.name}</span>
			<span>@{props.username}</span>
			<span>{props.date}</span>
			<span>{props.message}</span>
		</div>
	);
}
