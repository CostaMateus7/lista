import React, { useState } from "react";

export default function Main(){
  const [list, setList]  = useState([]);

  return <h1></h1>
}

// Montar input, title e button para adicionar tarefa;
// Adicionar tarefa;
// Terefa devera ter button de delete, check de feito e update;
// Estratégia: Montar um state list que será um array (push, slice);
// Tem um map que renderiza os itens do array;
// Toda vez que um ítem do array for adicionado deverá renderizar novamente;
//Assim devemos passar um useEffect.
