import React from 'react'
import ReactDOM from 'react-dom'

function App() {

  const universe = () => <h1>Hello universe!</h1>
  const world = function hello(){
    return(
      <h1>Hello world!</h1>
    )
  }

  return(
    <h1>
      {world()}
      ++++ text +++
      {universe()}
    </h1>
    )

}

export default App
