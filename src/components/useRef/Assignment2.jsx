import  React,{ useState, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

function Assignment2() {
    const [count,setCount] = useState(0);

    const numberOfTimesReRendered = useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        //forceRender(Math.random());
        setCount(count + 1);
    };

    numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {count} times.</p>
            <button ref={numberOfTimesReRendered} onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}

export default Assignment2;