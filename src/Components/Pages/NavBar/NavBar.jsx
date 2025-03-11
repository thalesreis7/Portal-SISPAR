import React from "react";
import styles from "./NavBar.module.scss";
import Fechar from "../../../assets/Header/imagem-fechar-header.png";
import Perfil from "../../../assets/Header/image.png";
import Sair from "../../../assets/Header/Botão - Sair.png";
import Solicitacao from "../../../assets/Header/Botão - Reembolso.png";
import Pesquisa from "../../../assets/Header/Botão - Pesquisa.png";
import Home from "../../../assets/Header/botão - Home.png";
import Historico from "../../../assets/Header/Botão - Histórico.png";
import {useNavigate} from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navBarEstilo}>
      <button className={styles.botaoHome} onClick={()=>{navigate("/")}}>
        <img src={Fechar} alt="Vetor de abrir e fechar" />
      </button>
      <section className={styles.sectionNavBar}>
        <img src={Perfil} alt="Vetor de perfil" />
        <div>
          <button onClick={()=>{navigate("/reembolsos")}}>
             <img src={Home} alt="Vetor de Home" />
          </button>
          <button onClick={()=>{navigate("/solicitacao")}}>
             <img src={Solicitacao} alt="Vetor de solicitação" />
          </button>
           <button onClick={()=>{navigate("/reembolsos")}}>
             <img src={Pesquisa} alt="Vetor de Pesquisa" />
           </button>
           <button onClick={()=>{("/solicitacao")}}>
              <img src={Historico} alt="Vetor de Histórico" />
           </button>
        </div>
      </section>
      <button className={styles.botaoSair} onClick={()=>{navigate("/")}}>
        <img src={Sair} alt="Vetor de Sair" />
      </button>
    </nav>
  );
}
