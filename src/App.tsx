import Game from './main-body/game';
import './styles/App.css';

function App() {
  return (
    <div className="page-container">
      <div id="title">
        <span id="title-text">ABattle</span>
      </div>
      <div id="main-body">
        <Game/>
      </div>
      <div id="footer"></div>
    </div>
  );
}


export default App
