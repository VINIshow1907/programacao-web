import React from "react"; 
import styles from "./Produto.module.css"; 
import { useState, useEffect } from "react"; 
const Produto = () => { 
    const [Name, setName]=useState(''); 
    const [Tipo, setTipo]  = useState(''); 
    const [Marca, setMarca]  = useState(''); 
    const [Preco, setPreco]  = useState(''); 
    const [error, setError] = useState(''); 
    
  return ( 
    <div>
      <h1>Cadastre o produto</h1> 
      <form> 
        <label> 
            <span> 
                Nome do Produto: 
            </span> 
            <input type="text" name="Name" required placeholder="Nome do Produto" /> 
        </label> 

        <label> 
            <span> 
                Tipo do Produto: 
            </span> 
            <input type="text" name="Tipo" required placeholder="Tipo do Produto" /> 
        </label> 

        <label> 
            <span> 
                Marca do Produto: 
            </span> 
            <input type="text" name="Marca" required placeholder="Marca do Produto" /> 
        </label> 

        <label> 
            <span> 
                Preço do Produto: 
            </span> 
            <input type="text" name="Preco" required placeholder="Preço do Produto" /> 
        </label> 
        <button className="btn"> 
            Cadastrar 
        </button> 
      </form> 
    </div> 
  ); 
}; 

export default Produto; 