let searchInput = document.querySelector('#InSearch')
let searchButton = document.querySelector('#search')

function validar(event){
if( searchInput.value.match(/^ +$/) || searchInput.value.match(/^$/) ){ //^ inicio de cadena, $ fin de cadena, "espacio y +", que haya un espacio o mas
searchInput=event.defaultPrevented;
    
    }
}
function search (){
    validar()
    window.location.href=`https://www.google.com.mx/search?q=${searchInput.value}`;
    
    }
function enter(e){
    if((e.key) == 'Enter')
    search()
}
searchInput.addEventListener('keyup', enter)
searchButton.addEventListener('click', search)
