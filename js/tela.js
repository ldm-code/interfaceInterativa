let horaElemento=document.getElementById("hora")
let imagemFundo=document.getElementById('imagemFundo')
function atualizarHora() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    horaElemento.innerText = `${horas}:${minutos}`;
}
atualizarHora();
setInterval(atualizarHora,1000)

imagemFundo.addEventListener("change",function(){
         let url=imagemFundo.files[0]
         if (url){

                   let url_real=URL.createObjectURL(url)
                   const body = document.body;
                     const largura = imagemFundo.naturalWidth;
                     const altura = imagemFundo.naturalHeight;


                   
                   body.style.backgroundImage = 'url("' + url_real + '")'
          }
         

})
