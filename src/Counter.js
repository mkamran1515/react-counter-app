import {useState} from 'react';

let Counter = ()=> {
    const [count,setCount] = useState(0);
    function clickerFunction()  {
          setCount(count+1);
    }
    return(
        <>
        <div className="counter-section">
            <div className="inner-counter">
                <h2>{count}</h2>
                <button className="btn-consultation" onClick={clickerFunction}>Count</button>
            </div>
        </div>
        </>
    );
   
}
export default Counter;