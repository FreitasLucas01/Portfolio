function btnMenuAtivo() {
  const btnMenu = document.querySelector(".nav #btnMenu")

  function handleClick(e) {
    if (e.type === "touchstart") e.preventDefault()
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
  btnMenu.addEventListener("touchstart", handleClick)
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

function smoothScroll() {
  const navItens = document.querySelectorAll(".menu a[href^='#']")

  navItens.forEach((itens) => {
    itens.addEventListener("click", (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute("href")
      const sections = document.querySelector(href)
      console.log(sections)

      sections.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  })
}
smoothScroll()