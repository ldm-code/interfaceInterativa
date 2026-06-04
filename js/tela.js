let horaElemento=document.getElementById("hora")
let dataElemento = document.getElementById("data");
let imagemFundo=document.getElementById('imagemFundo')
function atualizarHora() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();

    const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];
    horaElemento.innerText = `${horas}:${minutos}`;

dataElemento.innerText =
`${diasSemana[agora.getDay()]}, ${agora.getDate()} de ${meses[agora.getMonth()]} de ${agora.getFullYear()}`;
}
atualizarHora();
setInterval(atualizarHora,1000)

imagemFundo.addEventListener("change",function(){
         let url=imagemFundo.files[0]
         if (url){
          

                   let url_real=URL.createObjectURL(url)
                   const body = document.body;
                   


                   
                   body.style.backgroundImage = 'url("' + url_real + '")'
          }
         

})
