import React, { useState, useEffect } from "react";

function App() {
  const [produtoId, setProdutoID] = useState ('3');
  const [produtoNome, setProdutoNome] = useState('');
  const [data, setData] = useState({
    nome: "",
    preco: "" ,


  })

  function buscarProduto(){
    console.log("Procurar produto");
   //setProdutoID(4); //Ao setar o novo valor executa novamente o useEffect
    setProdutoNome("Curso de React");
    setData({
      nome: "Curso de Node.js",
      preco: 249 ,

    });
  }

  useEffect(() => {
    buscarProduto();
  },[produtoId]);

  return (
    <div>
      <p>Listar produto</p>
      <p>Produto: {produtoNome} </p>
      <p>{data.preco}</p>

    </div>
  );
}

export default App;
