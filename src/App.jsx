import React from "react";
import Header from "./components/Header";
import Comment from "./components/Comment";

function App() {

  const comment = {
    date: new Date(),
    text:'Não faça nada em troca ou pensando em colher frutos , apenas faça o bem ',
    author: {
      name:'Willian',
      avatarUrl:'https://placekitten.com/g/64/64'
    }
  }
  return (
    <div >
     <Header />
     <Comment  date={comment.date}
     text={comment.text} 
     author={comment.author}
      />
  
    </div>
 
  );
}

export default App;
