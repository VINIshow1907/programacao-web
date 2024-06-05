import React from "react";
import styles from "./Register.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [name, setDisplayName] = useState("");
  const [email, setDisplayEmail] = useState("");
  const [password, setDisplayPassword] = useState("");
  const [displayConfirm, setDisplayConfirm] = useState("");
  const [error, setError] = useState("");
  const {createUser, error: authError, loading} = useAuthentication(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    const user = {
      name,
      email,
      password,
    };
    if (password !== displayConfirm) {
      setError("As senhas precisam ser iguais!");
      return;
    }
    const res = await createUser(user)
  };

  useEffect(() => { 
    if (authError) { 
      setError(authError) 
    } 
  }, [authError]) 

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="Name"
            required
            placeholder="Nome Usuário"
            value={name}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail Usuário"
            value={email}
            onChange={(e) => setDisplayEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Senha Usuário"
            value={password}
            onChange={(e) => setDisplayPassword(e.target.value)}
          />
        </label>

        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="displayConfirm"
            required
            placeholder="Confirme Senha Usuário"
            value={displayConfirm}
            onChange={(e) => setDisplayConfirm(e.target.value)}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {!loading && <button className="btn">Cadastrar</button>} 
        {loading &&  <button className="btn" disabled>Aguarde...</button>} 
        {error && <p className="error">{error}</p>} 
      </form>
    </div>
  );
};

export default Register;
