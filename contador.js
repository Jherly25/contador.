let incrementar=document.querySelector('.incrementar');
let disminuir=document.querySelector('.disminuir');
let reset=document.querySelector('.reset');
let text=document.querySelector('.text');

let contador=0; 
incrementar.addEventListener('click', ()=>{
contador++; //se incrementa el contador
text.textContent=contador;
});
disminuir.addEventListener('click', ()=> {
contador--; //se decrementa el contador
text.textContent=contador;
});
reset.addEventListener('click', ()=>{
contador=0; //se inicializa el contador a 0
text.textContent=contador;
})
