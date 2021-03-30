function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector("#filme")
    var filmeFavorito = campoFilmeFavorito
  .value
    validaFilme(filmeFavorito)
    campoFilmeFavorito.value = ""
  }
  function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector("#listaFilmes")
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }
  function validaFilme(filmeFavorito){
    if (filmeFavorito.endsWith(".jpg")){
      listarFilmesNaTela(filmeFavorito)
    }else{
      alert("Formato de imagem inválido, digite novamente.")
    } 
  }
  