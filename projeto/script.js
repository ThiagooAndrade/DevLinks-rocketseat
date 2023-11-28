function toggleMode() {
  // documentElement é o html
  const html = document.documentElement
  html.classList.toggle("light")

  // substituir a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Thiago light mode')
  } else {
    img.setAttribute('src', './assets/Avatar-dark.png')
    img.setAttribute('alt', 'Foto de Thiago dark mode')
  }

}
