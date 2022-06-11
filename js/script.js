function btnMenuAtivo() {
  const btnMenu = document.querySelector(".nav #btnMenu")

  function handleClick(e) {
    const nav = document.querySelector(".nav")
    nav.classList.toggle("ativo")
    const ativo = nav.classList.contains("ativo")
    e.currentTarget.setAttribute("aria-expanded", ativo)
    if (ativo)
      e.currentTarget.setAttribute("aria-label", "Fechar Menu")
    else
      e.currentTarget.setAttribute("aria-label", "Abrir Menu")
  }



  btnMenu.addEventListener("click", handleClick)
}
btnMenuAtivo()


function acessibilidade() {
  const li = document.querySelectorAll(".menu li")

  function handleClick() {
    const nav = document.querySelector(".nav ")
    const btnMenu = document.querySelector(".nav #btnMenu")
    nav.classList.toggle("ativo")
    const ativo = nav.classList.contains("ativo")
    btnMenu.setAttribute("aria-expanded", ativo)
    if (ativo)
      btnMenu.setAttribute("aria-label", "Fechar Menu")
    else
      btnMenu.setAttribute("aria-label", "Abrir Menu")
  }

  li.forEach((itens) => {
    itens.addEventListener("click", handleClick)
  })
}
acessibilidade()