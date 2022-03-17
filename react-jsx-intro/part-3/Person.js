function Person(props) {
	let reply = props.age > 18 ? 'Please go vote!' : 'You must be 18!';

	let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);

	return (
		<div>
			<p>Learn some information about this person:</p>
			<ul>
				<li>Name: {props.name}</li>
				<li>Age: {props.age}</li>
				<ul>
					Hobbies:
					{hobbies}
				</ul>
			</ul>
			<h3>{reply}</h3>
		</div>
	);
}
