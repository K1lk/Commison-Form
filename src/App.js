import logo from './logo.svg';
import './App.css';
function CommisionStat() {
return (
<div id="Commision-Status">OPEN</div>
)
}

function App() {
return (
<div className="App">
	<header className="App-header">
		<div className="Top-Container">
			{/*Contains Logo*/}
			<div className="Logo-Container">
				<h1 className="Page-Title">
					<img className="Logo" src="urmom.png" />
					Kilk's Wacky Page
				</h1>
			</div>
			{/*Contains Dropa Down*/}
			<div className="Dropdown-Container">
				<button className="Drop-Btn">
					PlaceHolder
				</button>
				<div className="Dropdown-Content">
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
				</div>
			</div>
		</div>
		{/*Page Contents*/}
		<div className="Page-Contents">
			<h2>
				VRC COMMISIONS ARE
				<CommisionStat></CommisionStat>
			</h2>
			<h3>
				Welcome to my homepage... <del>ipsum lorem bullshit</del>
			</h3>
			<hr />
			<p>
				lmao
			</p>
			<h4>
				Other Platforms
			</h4>
			{/*Insert Social Media link bullshit */}
			<ul>
				<li>Twitter</li>
				<li>Discord</li>
				<li>Your Mom</li>
			</ul>
		</div>
	</header>
</div>
);
}

export default App;
