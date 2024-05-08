import React from "react"; 
import styles from "./Produto.module.css"; 
import { useState, useEffect } from "react"; 
const Produto = () => { 
  return ( 
    <div>
      <h1>Cadastre o produto</h1> 
      <form> 
        <label> 
            <span> 
                Nome do Produto: 
            </span> 
            <input type="text" name="displayName" required placeholder="Nome do Produto" /> 
        </label> 

        <label> 
            <span> 
                Tipo do Produto: 
            </span> 
            <input type="text" name="displayEmail" required placeholder="Tipo do Produto" /> 
        </label> 

        <label> 
            <span> 
                Marca do Produto: 
            </span> 
            <input type="text" name="displayPassword" required placeholder="Marca do Produto" /> 
        </label> 

        <label> 
            <span> 
                Preço do Produto: 
            </span> 
            <input type="text" name="displayConfirm" required placeholder="Preço do Produto" /> 
        </label> 
        <button className="btn"> 
            Cadastrar 
        </button> 
      </form> 
    </div> 
  ); 
}; 

export default Produto; 