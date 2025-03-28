import {useNavigate} from "react-router-dom";
import React from "react";
import Navio from "../../../assets/Login Screen/navio.png";
import Logo from "../../../assets/Login Screen/logo-ws.png";
import styles from "./Login.module.scss";

export default function Login() {
    const navigate = useNavigate();

    const irParaReembolsos = () =>{
        navigate("/Reembolsos")
    }
  return (
    <main className={styles.mainLogin}>
      <section className={styles.containerImagem}>
        <img src={Navio} alt="Imagem de um navio cargueiro de frente em um oceano." />
      </section>
      <section className={styles.containerForms}>
        <img src={Logo} alt="logotipo." />
        <h1>Boas vindas ao Nosso Portal SISPAR</h1>
        <p>Sistemas de Emissão de Boletos e Parcelamentos</p>
        
        <form className={styles.formLogin}>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="password" id="senha" placeholder="Senha" />

            <a href="">esqueci minha senha</a>
            <div>
                <button onClick={irParaReembolsos} className={styles.buttonEntrar}>Entrar</button>
                <button className={styles.buttonCriar}>Criar conta</button>
            </div>
        </form>
      </section>
    </main>
  );
}
