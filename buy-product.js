// Variáveis globais
let carrinho = [];
let filtroSelecionado = "todos";

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(produto, imagemUrl) {
    carrinho.push({ produto, imagemUrl });
    atualizarCarrinho();
    exibirMensagemAdicao(produto);
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Função para exibir mensagem de adição ao carrinho
function exibirMensagemAdicao(produto) {
    const mensagemAdicao = document.getElementById('mensagemAdicao');
    mensagemAdicao.textContent = `${produto} adicionado ao carrinho!`;
    setTimeout(() => {
        mensagemAdicao.textContent = '';
    }, 3000);
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itensCarrinho');
    const contagemCarrinho = document.getElementById('contagemCarrinho');

    itensCarrinho.innerHTML = '';
    contagemCarrinho.textContent = carrinho.length;

    carrinho.forEach((item, index) => {
        const li = document.createElement('li');

        // Adiciona imagem ao carrinho
        const imagem = document.createElement('img');
        imagem.src = item.imagemUrl;
        imagem.alt = item.produto;
        imagem.width = 40;
        li.appendChild(imagem);

        // Adiciona texto do produto ao carrinho
        li.textContent += ` ${item.produto}`;

        // Adiciona botão de remoção
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerDoCarrinho(index);
        li.appendChild(botaoRemover);

        itensCarrinho.appendChild(li);
    });
}

// Função para finalizar a compra
function finalizarCompra() {
    const mensagemCompra = 'Olá, estou interessado nos escapamentos ' + carrinho.map(item => item.produto).join(' e ');
    const numeroWhatsApp = '5548996728085';
    window.location.href = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(mensagemCompra);
}

// Função para filtrar os produtos
function filtrarProdutos() {
    const tipoEscapamento = document.getElementById('tipoEscapamento');
    filtroSelecionado = tipoEscapamento.value;

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const tipoCard = card.getAttribute('data-tipo');
        if (filtroSelecionado === "todos" || filtroSelecionado === tipoCard) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Executar a filtragem inicial
filtrarProdutos();
