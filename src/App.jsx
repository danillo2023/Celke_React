import React from "react";

function App() {
  return (
    <div >
      <h1> Ola <Welcome name="Mariana"/> </h1>
    </div>
  );
}

/*function Welcome(props){
  return <span>{props.name}</span>
}*/

class Welcome extends React.Component{
  render(){
    return <span>{this.props.name} </span>
  }
}

export default App;
