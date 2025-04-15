import React from "react";
import Home from "../../../assets/Dashboard/home header.png";
import Seta from "../../../assets/Dashboard/Vector.png";
import NavBar from "../NavBar/NavBar";
import styles from "./Solicitacao.module.scss";
import Deletar from "../../../assets/Solicitacao/deletar.png";
import Lixeira from "../../../assets/Solicitacao/lixeira.png";
import Motivo from "../../../assets/Solicitacao/motivo.png";
import { useState } from "react";
export default function Solicitacao() {

  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
  const [data, setData] = useState(""); // Estado para o campo data
  const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
  const [ordemInterna, setOrdemInterna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa


  const [dadosReembolso, setDadosReembolso] = useState([]); 

  //Função para capturar os valores dos estados

  const handleSubmit = () =>{
    const objetosReembolso = {
      colaborador,
      empresa,
      nPrestacao,
      descricao,
      data,
      tipoReembolso,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa,
    };
    setDadosReembolso(dadosReembolso.concat(objetosReembolso))
  };
  
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
          <form className={styles.formSolicitacao} onSubmit={(e)=> e.preventDefault}>
            <div className={styles.boxOne}>
              <div className={styles.inputName}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" value={colaborador} onChange={(e)=> setColaborador(e.target.value)}/>
              </div>
              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" value={empresa} onChange={(e)=> setEmpresa(e.target.value)}/>
              </div>
              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" value={nPrestacao} onChange={(e)=> setnPrestacao(e.target.value)}/>
              </div>
              <div className={styles.inputDescription}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea name="descricao" id="" value={descricao} onChange={(e)=> setDescricao(e.target.value)}></textarea>
              </div>
            </div>
            <div className={styles.verticalBar}></div>
            <div className={styles.boxTwo}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" value={data} onChange={(e)=> setData(e.target.value)}/>
              </div>
              <div className={styles.tipoDespesas}>
                <label htmlFor="">Tipo de Despesas</label>
                <select value={tipoReembolso} name="tipoReembolso" id=""  onChange={(e)=> setTipoReembolso(e.target.value)}>
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
                  <select  value={centroCusto} name="centroCusto" id="" onChange={(e)=> setCentroCusto(e.target.value)}>
                    <option value="">Selecionar</option>
                    <option value="">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                    <option value="">1100110002 - FIN VICE-PRESIDENCIA FINANÇAS MTZ</option>
                    <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                  </select>
                </div>
                <div className={styles.ordem}>
                  <label htmlFor="">Ord. Int.</label>
                  <input name="ordemInterna" type="text" value={ordemInterna} onChange={(e)=> setOrdemInterna(e.target.value)}/>
                </div>
                <div className={styles.divisoes}>
                  <label htmlFor="">Div.</label>
                  <input  name="divisao" type="number" value={divisao} onChange={(e)=> setDivisao(e.target.value)}/>
                </div>
                <div className={styles.pep}>
                  <label htmlFor="">PEP</label>
                  <input name="pep" type="number" value={pep} onChange={(e)=> setPep(e.target.value)}/>
                </div>
                <div className={styles.moeda}>
                  <label htmlFor="">Moeda</label>
                  <select name="moeda" id="" value={moeda} onChange={(e)=> setMoeda(e.target.value)}>
                    <option value="">Selecionar</option>
                    <option value="brl">BRL</option>
                    <option value="ars">ARS</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
                <div className={styles.distancia}>
                  <label htmlFor="">Dist / Km</label>
                  <input type="text" name="distanciaKm" id="" value={distanciaKm} onChange={(e)=> setDistanciaKm(e.target.value)}/>
                </div>
                <div className={styles.valorKm}>
                  <label htmlFor="">Valor / Km</label>
                  <input type="number" name="valorKm" id=""  value={valorKm} onChange={(e)=> setValorKm(e.target.value)}/>
                </div>
                <div className={styles.valorFaturado}>
                  <label htmlFor="">Val. Faturado</label>
                  <input type="number" name="valorFaturado" id="" value={valorFaturado} onChange={(e)=> setValorFaturado(e.target.value)}/>
                </div>
                <div className={styles.despesa}>
                  <label htmlFor="">Despesa</label>
                  <input type="number" name="despesa" id="" value={despesa} onChange={(e)=> setDespesa(e.target.value)}/>
                </div>
                <div className={styles.botoes}>
                  <button className={styles.botaoSalvar} onClick={handleSubmit}>Salvar</button>
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
              {dadosReembolso.map((item, index) => (
                <tr key={index}>
                <td><img src={Lixeira} alt="icone lixeira" /></td>
                <td>{item.colaborador}</td>
                <td>{item.empresa}</td>
                <td>{item.nPrestacao}</td>
                <td>{item.data}</td>
                <td> <img src={Motivo} alt="ícone do motivo" /></td>
                <td>{item.tipoReembolso}</td>
                <td>{item.centroCusto}</td>
                <td>{item.ordemInterna}</td>
                <td>{item.divisao}</td>
                <td>{item.pep}</td>
                <td>{item.moeda}</td>
                <td>{item.distanciaKm}</td>
                <td>{item.valorKm}</td>
                <td>{item.valorFaturado}</td>
                <td>{item.despesa}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  )
}
