const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"
async function visualizarInformacoesGlobais() {
const res = await fetch(url)
const dados = await res.json()
console.log(dados);

const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const horas = parseInt(dados.tempo_medio / 1e9)
const minutos = Math.round((dados.tempo_medio - horas) * 100)


const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Você sabia que o mundo tem 
<span>${pessoasNoMundo} </span> de pessoas e aproximadamente
<span>${pessoasConectadas} </span> estão conectadas em alguma rede socia e passam em media
<span> ${horas} horas </span>
<span> e ${minutos} minutos </span> `  
const container = document.getElementById("graficos-container")
container.appendChild(paragrafo)
}



visualizarInformacoesGlobais();