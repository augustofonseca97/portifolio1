//criar banco de dados 
const meusItens = [
    { nome: "Fundamentos em JavaScript", imagem: 'img/fundamentosemjavascript.png' },
    { nome: "HTML e CSS Avançado", imagem: "img/htmlecssavancado.png" },
    {
        nome: "Fundamentos em HTML e CSS", imagem: "img/fundamentoshtmlcss.png"
    },
    { nome: "Fundamentos de GIT", imagem: "img/fundamentosdegit.png" },
    {
        nome: "Introdução ao PHP", imagem: "img/introaophp.png"
    },
    {
        nome: "Programação Orientada a Objetos PHP", imagem: "img/oreintadaphp.png"
    },
    {nome: "Fundamentos em Tailwind", imagem:"img/fundamentosEmTailwind.png"},
    {nome: "Responsividade e interação com Tailwind", imagem:"img/responsividadeInteraçãoEmTailwind.png"}
]

//pegar o elemento que vou manipular
const inputBusca = document.getElementById('barra-pesquisa');
const cursos = document.getElementById('area-degree')
const seletorOrdenacao = document.getElementById('ordenacao');

// FUNÇÃO 1: Apenas desenha o array que receber na tela
function exibirGaleria(lista) {
    const htmlDosItens = lista.map(item => {
        return `
            <div class="degree">
                <h2 class="title-degree">${item.nome}</h2>
                <img src="${item.imagem}" alt="" class="photoDegree ">
            </div>
            <hr>
                `;
    }).join('');

    cursos.innerHTML = htmlDosItens;
}

// FUNÇÃO 2: Filtra a lista com base no texto digitado
function filtrarPorTexto() {
    // Pega o que o usuário digitou e transforma em minúsculo
    const textoDigitado = inputBusca.value.toLowerCase();

    // Filtra o array original
    const listaFiltrada = meusItens.filter(item => {
        // Transforma o nome do item em minúsculo e vê se ele inclui o texto digitado
        return item.nome.toLowerCase().includes(textoDigitado);
    });

    // Desenha a tela apenas com os itens que passaram no filtro
    exibirGaleria(listaFiltrada);
}

// FUNÇÃO 3: Aplica a ordenação baseada na escolha do usuário
function ordenarItens() {
    const escolha = seletorOrdenacao.value;

    // Criamos uma cópia do array original para não estragar a ordem padrão
    let listaOrdenada = [...meusItens];

    if (escolha === 'az') {
        // Ordenação de A para Z
        listaOrdenada.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (escolha === 'za') {
        // Ordenação de Z para A
        listaOrdenada.sort((a, b) => b.nome.localeCompare(a.nome));
    }

    // Desenha a tela novamente, mas agora com a lista na nova ordem!
    exibirGaleria(listaOrdenada);
}




//chamando a função e no paarametro dela colo o nome do meu objeto com as informações do itens
exibirGaleria(meusItens)

// ESCUTADOR DE EVENTOS: Roda a função toda vez que o usuário digitar/apagar uma letra
inputBusca.addEventListener('input', filtrarPorTexto);

// ESCUTADOR DE EVENTOS: Avisa o JS para rodar a função sempre que o usuário mudar a opção do menu
seletorOrdenacao.addEventListener('change', ordenarItens);
