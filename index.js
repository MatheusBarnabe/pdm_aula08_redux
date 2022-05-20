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

//essa é uma reducer
const historicoDePedidosCashbackReducer = (historicoDePedidosCashbackAtual = [], acao) => {
    if (acao.type == "SOLICITAR_CASHBACK"){
        return [
            ...historicoDePedidosCashbackAtual,
            acao.payload
        ]
    }
    return historicoDePedidosCashbackAtual
}

//essa é uma outra função reducer
const caixaReducer = (dinheiroEmCaixa = 0, acao) => {
    //se a acao for SOLICITAR_CASHBACK, reduzir o valor do caixa
    if (acao.type == "SOLICITAR_CASHBACK"){
        dinheiroEmCaixa -= acao.payload.valor
    } 
    //senao se a acao for CRIAR_CONTRATO, aumentare o valor do caixa
    else if (acao.type == "CRIAR_CONTRATO"){
        dinheiroEmCaixa += acao.payload.taxa
    }
    //senao, somente devolver a fatia de estado envolvido
    return dinheiroEmCaixa
}



