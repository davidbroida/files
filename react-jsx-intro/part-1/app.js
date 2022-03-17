function FirstComponent() {
	return <h1> My very first component.</h1>;
}

function NamedComponent(props) {
	return <p>My name is {props.name}.</p>;
}

const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="David" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
