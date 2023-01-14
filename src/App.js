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
	{/*Top of page is a row */}
	<div className="NavigatorContainter">
		<div className="Logo"><img src="urmom.png"></img></div>
		<div className="MainName"><h1>KILKS VRC COMMISIONS</h1></div>
		<div className="DropDownContainter"><p>IpsumLorem</p></div>
	</div>
	{/*Page Contents ins a column*/}
	<div className="MainContent">
		<div className="CommStatus"><h1>Commisions are <CommisionStat></CommisionStat></h1></div>
		<button className="CommButton">Click Here to Commision me!</button>
		<div className="Proposition"><p>IpsumLorem...</p></div>
		<div className="Gallery"></div>
		<div className="CommInfo">
			<button className="CommButton">Commision Me!</button>
			<button className="ContactButton">Contact Me!</button>
		</div>
	</div>
</div>
);
}

export default App;
