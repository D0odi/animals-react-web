import '../styles/App.css';
import Controls from './controls';

function Game() {

    return (
        <div className="game-container">
            <div className='playground' style={{ border: '1px solid black' }}>
                <div style={{ border: '1px solid black' }} className='action-field'></div>
                <Controls/>
            </div>
            <div style={{ border: '1px solid black' }}>
                {/* Second div */}
            </div>
            <div style={{ border: '1px solid black' }}>
                {/* Third div */}
            </div>
        </div>
    );
}

export default Game;
