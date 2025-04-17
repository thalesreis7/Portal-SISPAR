import { useState, useEffect } from "react";
import Api from "../../../Services/Api"
import React from "react";
import Home from "../../../assets/Dashboard/home header.png";
import Seta from "../../../assets/Dashboard/Vector.png";
import NavBar from "../NavBar/NavBar";
import styles from "./Solicitacao.module.scss";
import Deletar from "../../../assets/Solicitacao/deletar.png";
import Lixeira from "../../../assets/Solicitacao/lixeira.png";
import Motivo from "../../../assets/Solicitacao/motivo.png";


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
    limparCampos();
  };
  
  //Função para limpar campos do formúlario

  const limparCampos = () => {
    setColaborador(""),
    setEmpresa(""),
    setnPrestacao(""),
    setDescricao(""),
    setData(""),
    setMotivo(""),
    setTipoReembolso(""),
    setCentroCusto(""),
    setOrdemInterna(""),
    setDivisao(""),
    setPep(""),
    setMoeda(""),
    setDistanciaKm(""),
    setValorKm(""),
    setValorFaturado(""),
    setDespesa("");
  };

  //Função para enviar dados para API

  const [foiEnviado, setFoiEnviado] = useState(false); //Estado para saber se o formulario foi enviado.

  const enviarParaAnalise = async () => {
    try{
      // Const response  = O resultado da resposta do servidor
      // await = faz com que o código espere a resposta da API
      // Api é a nossa api
      // post é um método que serve para enviar algo para o servidor
      //post(argumentos) = 1º argumento é o caminho da rota, 2º argumento é o que será enviado.
      const response = await Api.post("/refound/new",dadosReembolso)
      console.log("Resposta da API", response);
      alert("Reembolso solicitado com sucesso!")// mostra um alerta para o usuário
      setFoiEnviado(true)
    }catch(error){// Caso der erro na hora de enviar ele mostra no console
      console.log("Erro ao enviar", error);
    }
  };

  useEffect(()=>{
    if(foiEnviado){
      setDadosReembolso([]);// Zera o formulário depois do envio
      setFoiEnviado(false) //Volta o estado original(false)
    }
  },[foiEnviado]) //observe essa variável

  //Resumo simplificado:
  //useState cria variáveis que guardam informações e atualizam a tela.
  //A função enviarParaAnalise manda os dados pra um servidor (API).
  // useEffect roda automaticamente quando a variável foiEnviado muda.
  //Depois que os dados são enviados, ele limpa tudo pra poder começar de novo.

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
          <form className={styles.formSolicitacao} onSubmit={(e)=> e.preventDefault()}>
            <div className={styles.boxOne}>
              <div className={styles.inputName}>
                <label htmlFor="nome">Nome Completo</label>
                <input 
                  value={colaborador} 
                  name="colaborador" 
                  type="text" 
                  onChange={(e)=> setColaborador(e.target.value)}/>
              </div>
              <div className={styles.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <input 
                name="empresa" 
                value={empresa} 
                type="text" 
                onChange={(e)=> setEmpresa(e.target.value)}/>
              </div>
              <div className={styles.inputPrestacao}>
                <label htmlFor="prestacao">Nº Prest. Contas</label>
                <input 
                  value={nPrestacao} 
                  type="number"
                  name="nPrestacao" 
                  onChange={(e)=> setnPrestacao(e.target.value)}/>
              </div>
              <div className={styles.inputDescription}>
                <label htmlFor="descricao">Descrição / Motivo do Reembolso</label>
                <textarea 
                  name="descricao" 
                  value={descricao} 
                  onChange={(e)=> setDescricao(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={styles.verticalBar}></div>
            <div className={styles.boxTwo}>
              <div className={styles.inputData}>
                <label htmlFor="date">Data</label>
                <input 
                  value={data} 
                  type="date"
                  name="date" 
                  onChange={(e)=> setData(e.target.value)}/>
              </div>
              <div className={styles.tipoDespesas}>
                <label htmlFor="tipoReembolso">Tipo de Despesas</label>
                <select 
                  value={tipoReembolso} 
                  name="tipoReembolso" 
                  onChange={(e)=> setTipoReembolso(e.target.value)}>
                    <option value="selecionar">Selecionar</option>
                    <option value="alimentação">Alimentação</option>
                    <option value="combustivel">Combustível</option>
                    <option value="condução">Condução</option>
                    <option value="estacionamento">Estacionamento</option>
                    <option value="viagem adm">Viagem Admin.</option>
                    <option value="viagem oper">Viagem Operacional</option>
                    <option value="eventos">Eventos de representação</option>
                </select>
              </div>
                <div className={styles.centroDeCusto}>
                  <label htmlFor="custo">Centro de Custo</label>
                  <select 
                    value={centroCusto} 
                    name="centroCusto" 
                    onChange={(e)=> setCentroCusto(e.target.value)}>
                    <option value="">Selecionar</option>
                    <option value="FIN CONTROLES INTERNOS MTZ">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                    <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">1100110002 - FIN VICE-PRESIDENCIA FINANÇAS MTZ</option>
                    <option value="FIN CONTABILIDADE MTZ">1100110101 - FIN CONTABILIDADE MTZ</option>
                  </select>
                </div>
                <div className={styles.ordem}>
                  <label htmlFor="ordemInterna">Ord. Int.</label>
                  {/* mudar para num o type */}
                  <input 
                    value={ordemInterna} 
                    name="ordemInterna" 
                    type="number" 
                    onChange={(e)=> setOrdemInterna(e.target.value)}/>
                </div>
                <div className={styles.divisoes}>
                  <label htmlFor="divisao">Div.</label>
                  <input 
                    name="divisao" 
                    type="number" 
                    value={divisao} 
                    onChange={(e)=> setDivisao(e.target.value)}/>
                </div>
                <div className={styles.pep}>
                  <label htmlFor="pep">PEP</label>
                  <input 
                    name="pep" 
                    type="number" 
                    value={pep} 
                    onChange={(e)=> setPep(e.target.value)}/>
                </div>
                <div className={styles.moeda}>
                  <label htmlFor="moeda">Moeda</label>
                  <select 
                    name="moeda"  
                    value={moeda} 
                    onChange={(e)=> setMoeda(e.target.value)}>
                    <option value="">Selecionar</option>
                    <option value="brl">BRL</option>
                    <option value="ars">ARS</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
                <div className={styles.distancia}>
                  <label htmlFor="distancia">Dist / Km</label>
                  <input 
                    type="number" 
                    name="distanciaKm"  
                    value={distanciaKm} 
                    onChange={(e)=> setDistanciaKm(e.target.value)}/>
                </div>
                <div className={styles.valorKm}>
                  <label htmlFor="valor">Valor / Km</label>
                  <input 
                    type="number" 
                    name="valorKm"  
                    value={valorKm} 
                    onChange={(e)=> setValorKm(e.target.value)}/>
                </div>
                <div className={styles.valorFaturado}>
                  <label htmlFor="faturado">Val. Faturado</label>
                  <input 
                    type="number" 
                    name="valorFaturado"  
                    value={valorFaturado} 
                    onChange={(e)=> setValorFaturado(e.target.value)}/>
                </div>
                <div className={styles.despesa}>
                  <label htmlFor="taxa">Despesa</label>
                  <input 
                    type="number" 
                    name="despesa"  
                    value={despesa} 
                    onChange={(e)=> setDespesa(e.target.value)}/>
                </div>
                <div className={styles.botoes}>
                  <button className={styles.botaoSalvar}
                    type="submit"
                    onClick={handleSubmit}>Salvar
                  </button>
                  <button className={styles.botaoDeletar}
                    type="button"
                    onClick={limparCampos}>
                  <img src={Deletar} alt="imagem do botão de deletar"/>
                  </button>
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
                <td>
                <img src={Lixeira} alt="icone lixeira" /></td>
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
          <button className={styles.botaoAnalise} onClick={enviarParaAnalise}>Enviar para análise</button>
        </main>
      </div>
    </div>
  )
}
