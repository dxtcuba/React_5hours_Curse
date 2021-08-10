// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

import React, {component, useState} from "react"

// function App() {
//     const [answer]= useState("yes")
//     console.log(answer)

//     return(
//         <div>
//             <h1>Is state important to know? {answer}</h1>
//         </div>
//     )
// }

function App() {
    const [count]
    return (
        <div>
            <h1>{count}</h1>
            <button>Change!</button>
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