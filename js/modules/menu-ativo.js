export default function initMenuAtivo() {
  const btnMenu = document.querySelector(".nav #btnMenu")

  function handleClick(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    const nav = document.querySelector(".nav")
    nav.classList.toggle("ativo")
    document.body.classList.toggle("ativo")
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
