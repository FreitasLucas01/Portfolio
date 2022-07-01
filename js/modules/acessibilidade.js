export default function initAcessibilidade() {
  const li = document.querySelectorAll(".menu li")

  function handleClick() {
    const nav = document.querySelector(".nav ")
    const btnMenu = document.querySelector(".nav #btnMenu")
    nav.classList.toggle("ativo")
    document.body.classList.toggle("ativo")
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
