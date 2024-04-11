import React, { useState, useEffect } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        return () => clearInterval(timerId); // Clean after every interval
    }, []);

    // Reset button
    function resetCounter() {
        setCounter(0);
    }

    return (
        <div className="d-flex justify-content-center align-items-center pb-5 pt-5" id='main'>
        <div className='bg-white text-center text-dark pb-5 pt-5' id='inside'>
            <div id='buttons' className='pb-5 pt-5'>
                <h2>Counter</h2>
                <h3>{counter}</h3>
                <button className='btn btn-dark text-light shadow' onClick={resetCounter}>Reset</button>
            </div>
        </div>
    </div>
    

    );
}

export default Counter;
