import React, { useState } from 'react';

const Counter = props => { const [count, setCount] = useState(0);

const handleClick = () => {
    setCount(count + 1);
}

return(
    <div>
        <div>
            <h1 className="red">JIRAIYA!!!</h1>
            <h1 className="blue">{ count }</h1>
            <button onClick={ handleClick }><h1 className="blue">Click Me</h1></button>
        </div>
        
    </div>
);
}
export default Counter;