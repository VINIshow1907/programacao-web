import React from "react";
import styles from "./Register.module.css";
import { useState, useEffect } from "react";
const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    const user = {
      Name,
      Email,
      Password,
    };
    if (Password !== Confirm) {
      setError("As senhas precisam ser iguais!");
      return;
    }
  };

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome Usuário"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="displayEmail"
            required
            placeholder="E-mail Usuário"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="displayPassword"
            required
            placeholder="Senha Usuário"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="displayConfirm"
            required
            placeholder="Confirme Senha Usuário"
            value={Confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {error && <p className="error">{error}</p>} 
      </form>
    </div>
  );
};

export default Register;
