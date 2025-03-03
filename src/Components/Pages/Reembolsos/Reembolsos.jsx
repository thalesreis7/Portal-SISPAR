import React from 'react'
import Home from '../../../assets/Dashboard/home header.png'
import Seta from '../../../assets/Dashboard/Vector.png'
import SolicitarReembolso from '../../../assets/Dashboard/Solicitar - Reembolso.png'
import Análise from '../../../assets/Dashboard/Análises.png'
import SolicitarHistorico from '../../../assets/Dashboard/Solicitar - Histórico.png'
import NumerosSolicitados from '../../../assets/Dashboard/N-Solicitados.png'
import NumeroAnálise from '../../../assets/Dashboard/N-Análises.png'
import NumerosAprovados from '../../../assets/Dashboard/N-Aprovados.png'
import NumerosRejeitados from '../../../assets/Dashboard/N-Rejeitados.png'
import SistemaAtualizado from '../../../assets/Dashboard/Sistema-atualizado.png'

export default function Reembolsos() {
  return (
    <div>
     <div></div>
     <header>
        <img src={Home} alt="Casinha Header" />
        <img src={Seta} alt="Seta indicativa a reembolsos" />
        <p>Reemblosos</p>
       </header>
       <main>
        <div>
          <h1>Sistema de Reembolsos</h1>
          <p>Solicite novos pedidos de reembolso, vizualize solicitações em alálise e todo o histórico.</p>
        </div>
        <section>
          <article>
            <img src={SolicitarReembolso} alt="Solicitar reembolso" />
            <p>Solicitar Reembolso</p>
          </article>
          <article>
            <img src={Análise} alt="Análise do reembolso" />
            <p>Verificar Análises</p>
          </article>
          <article>
            <img src={SolicitarHistorico} alt="Solicitar Histórico" />
            <p>Histórico</p>
          </article>
        </section>
        <section>
          <div>
            <img src={NumerosSolicitados} alt="" />
            <h4>182</h4>
            <p>Solicitados</p>
          </div>
          <div>
            <img src={NumeroAnálise} alt="" />
            <h4>74</h4>
            <p>Em análise</p>
          </div>
          <div>
            <img src={NumerosAprovados} alt="" />
            <h4>195</h4>
            <p>Aprovados</p>
          </div>
          <div>
            <img src={NumerosRejeitados} alt="" />
            <h4>41</h4>
            <p>Rejeitados</p>
          </div>
        </section>
        <section>
          <img src={SistemaAtualizado} alt="Logo sistema atualizado" />
          <a href="">Sistema Atualizado</a>
        </section>
       </main>
    </div>
  )
}
