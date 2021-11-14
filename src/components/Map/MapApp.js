import './App.css';
import Map from './Map';


function App(props) {
  return (
    <div className="App">
      <Map setCity = {props.setCity}/>
      
    </div>
  );
}

export default App;
