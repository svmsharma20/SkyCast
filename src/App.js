import './App.css';
import ForcastGrid from './components/forcast/forcast_grid/ForcastGrid';
import Header from './components/header/Header';
import Location from './components/loc/location/Location';

function App() {
  return (
    <div className="App">
      <Header />
      <Location />
      <ForcastGrid />
    </div>
  );
}

export default App;
