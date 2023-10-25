import React from "react";

function App() {

  return (
    <div >
      <h1> Ola <Welcome name="Cesar"/> </h1>
    </div>
  );
}

function Welcome(props){
  return <span>{props.name}</span>
}

export default App;
