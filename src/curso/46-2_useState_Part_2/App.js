// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

import React, {component, useState} from "react"

function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("yes")

    function increment(){
        setCount(prevCount => prevCount + 1)
    }
    function decrement(){
        setCount(prevCount => prevCount - 1)
    }
    function double(){
        setCount(prevCount => prevCount * 2)
    }
    function divide(){
        setCount(prevCount => prevCount / 2)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={double}>Double</button>
            <button onClick={divide}>Divide</button>
        </div>
    )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default App