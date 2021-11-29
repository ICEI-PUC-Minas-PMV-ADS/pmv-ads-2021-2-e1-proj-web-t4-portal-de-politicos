const candidatos = [
    {
        id: 1,
        name: 'Bart Simpson Oliveira',
        partido: 'PUC',
        voto: 'Sim',
        imgUrl: "img/bart.jpg"

    },
    {   
        id: 2,
        name: ' Maria Flor Da Silva',
        partido: 'PUC',
        voto: 'Sim',
        imgUrl: "img/florzinha.jpg"
    },
    {   
        id: 3,
        name: 'Stich Rodrigues',
        partido: 'PUC',
        voto: 'Sim',
        imgUrl: "img/STICH.jpg"
    }
    
]

var inputBusca = document.getElementById('input-busca');
inputBusca.addEventListener('keyup', function(event){

    if(event.keyCode === 13){
        filtrarCandidatos();
        atualizarLista();
    }
    if(event.keyCode === 27){
        limparListaFiltro();
    }

})

var candidatosFiltrados = [];

function filtrarCandidatos() {
    /* filtra os candidatos da base de acordo com texto informado*/
    candidatosFiltrados = [];
    pesquisa = document.getElementById('input-busca').value.toUpperCase();
    
    if(pesquisa.length == 0){
        candidatosFiltrados = candidatos;
    }else{
        for(var i = 0 ; i < candidatos.length ; i++){
            if(candidatos[i].name.toUpperCase().includes(pesquisa)){
                candidatosFiltrados.push(candidatos[i]);
            }
        }
    }    
}

function focar() {
    filtrarCandidatos();

    atualizarLista();
}

function limparListaFiltro() {
    /* limpa a lista */
    lista = document.getElementById('ul-busca');
    lista.innerHTML = '';
}

function atualizarLista() {
    limparListaFiltro()

    /* preenche a lista de acordo com os candidatos filtrados */
    for(var i = 0 ; i < candidatosFiltrados.length ; i++ ){

        var liElement = document.createElement('li');
        liElement.innerText = candidatosFiltrados[i].name;
        liElement.id = candidatosFiltrados[i].id;
        
        liElement.addEventListener('click', function(event){
            atualizaInterface(event.target.id);
            limparListaFiltro();
        })

        lista.append(liElement);  
    }
}

function buscaCandidatoEscolhido(id_candidato){
    for(var i = 0 ; i <= candidatos.length ; i++){
        if(id_candidato == candidatos[i].id){
            return candidatos[i];
        }
    }
}

function atualizaInterface(id_candidato){
    candidatoClicado = buscaCandidatoEscolhido(id_candidato);

    nomePoliticoElement = document.getElementById('nome-politico');
    nomePoliticoElement.innerText = candidatoClicado.name;

    imagemPoliticoElement = document.getElementById('imagem-politico');
    imagemPoliticoElement.src = candidatoClicado.imgUrl;
    
}

atualizaInterface(3);