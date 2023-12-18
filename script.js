function toggleMode() {
  const html = document.documentElement /*acessar meu html atraves da função*/
  html.classList.toggle("light") /*troca de classes*/

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light2.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar2.png")
  }
}
