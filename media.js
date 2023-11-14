const nome = document.querySelector("#nome");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const botao = document.getElementById("b1");
const med = document.getElementById("me");
const r = document.getElementById("resp");
const bot2 = document.getElementById("b2");
const listaMedias = document.getElementById("listaMedias");

bot2.addEventListener('click', limpar);
function limpar() {
    nome.value = "";
    n1.value = "";
    n2.value = "";
    n3.value = "";
    med.value = "";
    r.innerHTML = "Campos limpos com sucesso!";
}

botao.addEventListener('click', () => {
    let aluno = nome.value;
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let num3 = Number(n3.value);
    let m = Number(med.value);
    let mf = (num1 + num2 * 2 + num3 * 3 + m) / 7;

    r.innerHTML = `${aluno} suas notas são: <br>
    Nota 1: ${num1} <br>
    Nota 2: ${num2} <br>
    Nota 3: ${num3}<br>
    Média de Exercícios: ${m}<br>
    Média final: ${mf.toFixed(2)}`;

    adicionarMediaLista(aluno, mf.toFixed(2));
});

function adicionarMediaLista(aluno, media) {
    let medias = JSON.parse(localStorage.getItem('medias')) || [];
    medias.push({ aluno, media });
    localStorage.setItem('medias', JSON.stringify(medias));
}

function mostrarListaMedias() {
    document.getElementById('calculoMedias').style.display = 'none';
    document.getElementById('listaMedias').style.display = 'block';
    atualizarListaMedias();
}

function atualizarListaMedias() {
    let medias = JSON.parse(localStorage.getItem('medias')) || [];
    listaMedias.innerHTML = '<h3>Lista de Médias Calculadas</h3>';
    medias.forEach((item, index) => {
        listaMedias.innerHTML += `<p>${index + 1}. ${item.aluno}: ${item.media}</p>`;
    });
}

document.getElementById('calculoMedias').style.display = 'block';
document.getElementById('listaMedias').style.display = 'none';

function mostrarCalculoMedia() {
    document.getElementById('calculoMedias').style.display = 'block';
    document.getElementById('listaMedias').style.display = 'none';
}


