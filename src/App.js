import './App.css';
import Clock from './components/pure/clock';
import ClockF from './components/pure/clock_f';

function App() {
  return (
    <div className="App">
      <h1>Componente de clase</h1>
      <Clock></Clock>
      <hr />
      <h1>Componente funcional</h1>
      <ClockF></ClockF>
    </div>
  );
}

export default App;
