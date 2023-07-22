function toggleMode() {
  const html = document.documentElement

  //forma completa de escrever a função condicional para mudar os modos:

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  //   }else{
  //     html.classList.add('light')
  //   }

  html.classList.toggle("light") //faz a mesma função do código acima
  /* 
    toggle em inglês significa ALTERNAR por este motivo talvez ele faz essa função
    de alternar ativando ou não a class.  
  */

  // trocar a imagem:

  // pegar a tag img
  const img = document.querySelector("#profile img") // query selector - seletor de consulta ou seja busca a tag e atribui (=) a const img

  
  //substituir a img
  if(html.classList.contains('light')){
    //se light mode, colocar img fundo rocho
    img.setAttribute("src", "./assets/avatar-light.png")
    //desafio trocar o alt
    img.setAttribute('alt', "foto fundo rocho")
  }else{
    // se night mode, colocar img fundo laranja
    img.setAttribute("src", "./assets/avatar.png")
    //desafio trocar o alt
    img.setAttribute("alt", "foto fundo laranja")
  }
}
