let itensNoCarrinho = []

function adicionarItem (pedido) {
    // if (itensNoCarrinho.length == 0) {
    //     itensNoCarrinho.push({
    //         id: pedido.id,
    //         image: pedido.image,
    //         nome: pedido.nome,
    //         descricao: pedido.descricao,
    //         quantidade: 1,
    //         preco: pedido.preco
    //     });
    //     return
    // }

    let pedidoEncontrado = procuraIndexPedido(pedido.id)
    if (pedidoEncontrado != -1) {
        itensNoCarrinho[pedidoEncontrado].quantidade+= 1;
    }       
    else {
        itensNoCarrinho.push({
            id: pedido.id,
            image: pedido.image,
            nome: pedido.nome,
            descricao: pedido.descricao,
            quantidade: 1,
            preco: pedido.preco
        });
    }

}

function removerItem (pedidoId) {
    let pedidoParaRemover = procuraIndexPedido(pedidoId)
    let itemNoCarrinho = itensNoCarrinho[pedidoParaRemover]

    if (itemNoCarrinho.quantidade > 1) {
        itemNoCarrinho.quantidade-=1
    }
    else {
        itensNoCarrinho.slice(pedidoParaRemover, 1)
    }
}

function procuraIndexPedido (pedidoId) {
    return itensNoCarrinho.findIndex((item) => item.id === pedidoId)
}

function calcularTotal () {
    let valorTotal = itensNoCarrinho.reduce((acumulador, valorAtual) => acumulador += valorAtual)
    return valorTotal.toFixed(2).replace('.', ',')
}

function pegarItensDoCarrinho () {
    return itensNoCarrinho; 
}

function gerarMensagemWhatsApp () {
    const mensagemInicial = `Olá!%20Gostaria%20de%20fazer%20o%20seguinte%20pedido:%0A%0A`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=5532991657309&text=${mensagemInicial}`;  
    
    let listaPedidos = itensNoCarrinho.map((item) => `-%20${item.quantidade}x%20${item.nome}`);
    let frasePedidos = listaPedidos.reduce((acumulador, valorAtual) => {acumulador + `%0A` + valorAtual}, '');
    let mensagemPedido = frasePedidos + `%0A*Total:%20R$%20${calcularTotal()}*`

    let urlWhatsAppFinal = urlWhatsApp + mensagemPedido;
    return urlWhatsAppFinal;
}

export {adicionarItem, removerItem, calcularTotal, pegarItensDoCarrinho, gerarMensagemWhatsApp}