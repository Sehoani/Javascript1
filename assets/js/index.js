const precioInicial = document.querySelector(".precio-inicial")
let cantidad = document.querySelector(".cantidad")
let total = document.querySelector(".valor-total")
let mas = document.querySelector(".mas")
let menos = document.querySelector(".menos")

function adicionar(){
    cantidad.innerHTML++

    total.innerHTML = cantidad.innerHTML * precioInicial.innerHTML;
    console.log("funcionas")
}

function disminuir(){
    cantidad.innerHTML--
    total.innerHTML = cantidad.innerHTML * precioInicial.innerHTML;

}
