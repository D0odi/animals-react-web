import { useState } from 'react';
import '../styles/App.css';
import Animals from './animals';
import './styles/playground.css';

const Game = () => {
    const [animal_type, setAnimalType] = useState<string>('');
    const [animal_count, setAnimalCount] = useState<number>(4);

    const handleSendClick = () => {
        const inputField = document.getElementById('input-field') as HTMLInputElement;
        setAnimalType(inputField.value);
    };

    return (
        <div className="game-container">
            <div className='playground' style={{ border: '1px solid black' }}>
                <div style={{ border: '1px solid black' }} className='action-field'>
                    <Animals a__type={animal_type} a__count={animal_count}/>
                </div>
                <div style={{ border: '1px solid black' }} className='game-controls'>
                    <button className='' style={{ fontSize: '140%' }} onClick={handleSendClick}>Send</button>
                    <input className='' type='field' id='input-field' style={{ fontSize: '140%' }}/>
                </div>
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
