//essa função é uma função criadora de ação 
//ou seja, ela devolve um objeto JSON
//uma ação é um objeto JSON

//criadora de ação
const criarContrato = (nome, taxa) => {
    return {
        type: 'CRIAR_CONTRATO',
        payload: {
            nome, taxa
        }
    }
}

//essa também é criadora de ação
const cancelarContrato = (nome) => {
    return {
        type: 'CANCELAR_CONTRTO',
        payload: {
            nome
        }
    }
}

//essa também é criadora de ação
const solicitarCashBack = (nome, valor) => {
    return {
        type: 'SOLICITAR_CASHBACK',
        payload: {
            nome, valor
        }
    }
}