import './styles/playground.css';

function Controls() {
    return (
        <div style={{ border: '1px solid black' }} className='game-controls'>
            <button className='' style={{ fontSize: '140%' }}>Send</button>
            <input className='' type='field' style={{ fontSize: '140%' }}/>
        </div>
    );
}

export default Controls;