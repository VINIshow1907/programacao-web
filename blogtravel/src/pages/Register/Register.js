import React from "react"; 
import styles from "./Register.module.css"; 
import { useState, useEffect } from "react"; 
const Register = () => { 
  return ( 
    <div>
      <h1>Cadastre-se para postar</h1> 
      <form> 
        <label> 
            <span> 
                Nome: 
            </span> 
            <input type="text" name="displayName" required placeholder="Nome Usuário" /> 
        </label> 

        <label> 
            <span> 
                E-mail: 
            </span> 
            <input type="text" name="displayEmail" required placeholder="E-mail Usuário" /> 
        </label> 

        <label> 
            <span> 
                Senha: 
            </span> 
            <input type="password" name="displayPassword" required placeholder="Senha Usuário" /> 
        </label> 

        <label> 
            <span> 
                Confirmação de Senha: 
            </span> 
            <input type="password" name="displayConfirm" required placeholder="Confirme Senha Usuário" /> 
        </label> 
        <button className="btn"> 
            Cadastrar 
        </button> 
      </form> 
    </div> 
  ); 
}; 

export default Register; 