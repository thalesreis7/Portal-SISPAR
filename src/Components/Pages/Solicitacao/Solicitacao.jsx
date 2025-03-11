import React from "react";
import Home from "../../../assets/Dashboard/home header.png";
import Seta from "../../../assets/Dashboard/Vector.png";
import NavBar from "../NavBar/NavBar";
import styles from "./Solicitacao.module.scss";
import Deletar from "../../../assets/Solicitacao/deletar.png";
import Lixeira from "../../../assets/Solicitacao/lixeira.png";
import Motivo from "../../../assets/Solicitacao/motivo.png";

export default function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar/>
      <div className={styles.primaryContainer}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor de Home" />
          <img src={Seta} alt="Vetor de seta" />
          <p>Solicitação</p>
          <img src={Seta} alt="Vetor de seta" />
          <p>Solicitação de Reembolso</p>
        </header>
        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao}>
            <div className={styles.boxOne}>
              <div className={styles.inputName}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>
              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>
              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" />
              </div>
              <div className={styles.inputDescription}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea name="" id=""></textarea>
              </div>
            </div>
            <div className={styles.verticalBar}></div>
            <div className={styles.boxTwo}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" />
              </div>
              <div className={styles.tipoDespesas}>
                <label htmlFor="">Tipo de Despesas</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">Alimentação</option>
                  <option value="">Combustível</option>
                  <option value="">Condução</option>
                  <option value="">Estacionamento</option>
                  <option value="">Viagem Admin.</option>
                  <option value="">Viagem Operacional</option>
                  <option value="">Eventos de representação</option>
                </select>
              </div>
                <div className={styles.centroDeCusto}>
                  <label htmlFor="">Centro de Custo</label>
                  <select name="" id="">
                    <option value="">Selecionar</option>
                    <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                    <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANÇAS MTZ</option>
                    <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                  </select>
                </div>
                <div className={styles.ordem}>
                  <label htmlFor="">Ord. Int.</label>
                  <input type="number" />
                </div>
                <div className={styles.divisoes}>
                  <label htmlFor="">Div.</label>
                  <input type="number" />
                </div>
                <div className={styles.pep}>
                  <label htmlFor="">PEP</label>
                  <input type="number" />
                </div>
                <div className={styles.moeda}>
                  <label htmlFor="">Moeda</label>
                  <select name="" id="">
                    <option value="">Selecionar</option>
                    <option value="">BRL</option>
                    <option value="">ARS</option>
                    <option value="">USD</option>
                  </select>
                </div>
                <div className={styles.distancia}>
                  <label htmlFor="">Dist / Km</label>
                  <input type="text" name="" id=""/>
                </div>
                <div className={styles.valorKm}>
                  <label htmlFor="">Valor / Km</label>
                  <input type="number" name="" id="" />
                </div>
                <div className={styles.valorFaturado}>
                  <label htmlFor="">Val. Faturado</label>
                  <input type="number" name="" id="" />
                </div>
                <div className={styles.despesa}>
                  <label htmlFor="">Despesa</label>
                  <input type="number" name="" id="" />
                </div>
                <div className={styles.botoes}>
                  <button className={styles.botaoSalvar}>Salvar</button>
                  <button className={styles.botaoDeletar}>
                  <img src={Deletar} alt="" /></button>
                </div>
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={Lixeira} alt="icone lixeira" /></td>
                <td>Vitor Carvalho...</td>
                <td>W55001</td>
                <td>320456</td>
                <td>08/01/2025</td>
                <td> <img src={Motivo} alt="ícone do motivo" /></td>
                <td>Desp. de viagem a...</td>
                <td>1100110002 - FIN...</td>
                <td>0003</td>
                <td>002</td>
                <td>001</td>
                <td>BRL</td>
                <td>434Km</td>
                <td>0,65</td>
                <td>242.10</td>
                <td>40.55</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}
