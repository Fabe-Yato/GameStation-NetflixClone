var iconePrincipal = document.querySelector(".perfil"); 
var menuDropdown = document.querySelector(".perfil-config").classList.add("sumir");
var iconeDropdown = document.querySelector(".dropdown");

iconePrincipal.addEventListener("mouseover", function aparecer(){
    
    let menuDropdown = document.querySelector(".perfil-config");
    menuDropdown.classList.toggle("sumir");
    iconeDropdown.classList.toggle("dropdownAction");

    menuDropdown.addEventListener("mouseover", function fecharAba(){
        menuDropdown.classList.remove("sumir");
        iconeDropdown.classList.add("dropdownAction");
    });

    menuDropdown.addEventListener("mouseout", function fecharMenu(){
        menuDropdown.classList.add("sumir"); 
        iconeDropdown.classList.remove("dropdownAction");
    })
});

var lupa = document.querySelector(".pesquisa");

lupa.addEventListener("mouseover", function pesquisar(){
    
    let search_box = document.querySelector(".search-box");
    
    search_box.classList.toggle("search-box-open");
    search_box.addEventListener("mouseout", function fecharPesquisa(){
        search_box.classList.remove("search-box-open");
    })
  
});


