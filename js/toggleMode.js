function toggleMode() {
  /* troca do tema
  if(html.classList.contains("light")){
    html.classList.remove("light")
  }else{ html.classList.add("light")}

   Equivalente ao trecho abaixo assim como um ternario :*/
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  html.classList.contains("light")
    ? // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "assets/avatar-light.png")
    : // se tiver sem light mode, manter a imagem normal.
      img.setAttribute("src", "assets/avatar.png")
  // trocando o alt
  html.classList.contains("light")
    ? img.setAttribute(
        "alt",
        "Foto aureo dantas olhando para a camera, de dia e com oculos de lente amarela "
      )
    : img.setAttribute(
        "alt",
        "foto de aureo dantas, em pose de perfil, em preto e branco"
      )
}
