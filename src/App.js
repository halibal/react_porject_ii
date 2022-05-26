import './App.css';
import Navbar from './components/Navbar';
import Static from './components/Static';
import CardFunction from './components/Card';
import data from './data.js';


function App() {
	const cards = data.map((items) => {
		return <CardFunction
			key={items.id}
			items={items}
		/>
	});


	return (
		<div className="App">
			<Navbar />
			<div className='whole-page-content'>
				<Static />
				<div className='card-container'>
					{cards}
				</div>
			</div>
		</div>
	);
}

export default App;
