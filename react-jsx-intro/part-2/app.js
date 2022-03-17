function App() {
	return (
		<div>
			<Tweet name="David Broida" username="davidbroida" date={new Date().toDateString()} message="fortheboys" />
			<Tweet
				name="John Broida"
				username="jpbroida"
				date={new Date().toDateString()}
				message="Are you still getting into mischeif?!"
			/>
			<Tweet
				name="AnneMarie Catanzano"
				username="amcat"
				date={new Date().toDateString()}
				message="You should probably wear a jacket!"
			/>
		</div>
	);
}
