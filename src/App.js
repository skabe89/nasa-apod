import logo from './logo.svg';
import './App.css';
import GetPics from './GetPics';
import PicsContainer from './components/PicsContainer';

function App() {
  return (
    <div className="App">
      <h1>NASA APOD</h1>
      <PicsContainer />
    </div>
  );
}

export default App;
