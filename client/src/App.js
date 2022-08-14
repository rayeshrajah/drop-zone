import './App.css';
import DropZoneTimer from './components/dropZoneTimer';

//Implemented OPTION B 
//Can enter any date in DropZoneTimer component as a prop

const App = () => {
	return (
		<div className="App">
			<div className="dropZone__header-text-container">
				<div className="dropZone__drop-text">Drop</div>
				<div className="dropZone__zone-text">Zone</div>
			</div>
			<div className="dropZone__title-timer-container">
				<div className="dropZone__title-text">Leezy Boost 103</div>
				<div className="dropZone__timer-container">
					<DropZoneTimer date="2022/08/24"/>
				</div>
				<div className="dropZone__until-drop-text">Until drop</div>
			</div>
		</div>
	);
}

export default App;
