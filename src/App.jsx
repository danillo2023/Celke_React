import React, { useState } from "react";


function App() {

  const [nome , setNome] = useState('Willian');

  return (
    <div >
      <p>{nome}</p>
  <button onClick={() => setNome("Danillog Gomes Da Silva")}>Alterar</button>
    </div>
 
  );
}

export default App;
