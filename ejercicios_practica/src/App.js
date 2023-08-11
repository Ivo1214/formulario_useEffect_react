import logo from './logo.svg';
import './App.css';
import CounterApp from './components/CounterApp';
import DataDisplay from './components/DataDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        AQUÍ AGREGUE SUS COMPONENTES
        {/* <CounterApp/> */}
        <DataDisplay/>
      </header>
    </div>
  );
}

export default App;
