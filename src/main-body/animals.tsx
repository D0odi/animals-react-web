import { AnimalsProps } from "../types";

const Animals = ({ a__type, a__count }: AnimalsProps) => {
    const headings = [];
    for (let i = 0; i < a__count; i++) {
        headings.push(<h2 key={i}>{a__type}</h2>);
    }

    return (
        <div style={{flexDirection: 'row', display: 'flex'}}>
            {headings}
        </div>
    );
};

export default Animals;