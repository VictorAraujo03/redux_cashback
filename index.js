//essa primeira funcão é uma criadora de ação
//ela vai criar um contrato
const criarContrato = (nome, taxa) => {
    return {
        type: 'CRIAR_CONTRATO',
        payload: {nome, taxa}
    }
}

//funcao criadora de acao
//ela deve criar uma acao de cancelamento de contrato
//para tal, ela só precisa saber o nome do cliente 
const cancelarContrato = (nome) => {
    return {
        type: 'CANCELAR_CONTRATO',
        payload: {nome}
    }
}

//funcao criadora de acao para solicitacoes de cashback
const solicitarCashback = (nome, valor) => {
    return {
        type: 'SOLICITAR_CASHBACK',
        payload: {nome, valor}
    }
}