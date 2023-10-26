import React, { useState } from 'react';

function App() {

  const [dados, setDados ] = useState({
    nome_usuario:"",
    email_usuario:''
  });

  const valorInput = e => setDados({...dados, [e.target.name]: e.target.value});


  const cadUsuario = e =>{
    e.preventDefault();
    //Maninylar os dados recebidos , por exemplo, enviar os dados para API
    console.log("Nome: " + dados.nome_usuario);
    console.log("E-mail: " + dados.email_usuario);
  }

  return (
    <div>
      <h1>Cadastrar</h1>
      <form onSubmit={cadUsuario}>
        <label>Nome: </label>
        <input type="text" name="nome_usuario" placeholder="Nome do cliente" onChange={valorInput}/> <br /> <br />

        <label>E-mail: </label>
        <input type="email" name="email_usuario" placeholder="Seu email" onChange={valorInput} /> <br /> <br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
