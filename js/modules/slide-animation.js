export default function initSlideAnimation() {
  const sectionsLeftSlide = document.querySelectorAll(".js-leftSlide");
  const sectionsRightSlide = document.querySelectorAll(".js-rightSlide");
  let sectionsTop = window.innerHeight * 0.6;

  function handleScroll() {
    sectionsLeftSlide.forEach((itens) => {
      const itensTop = itens.getBoundingClientRect().top
      const sectionView = (itensTop - sectionsTop) < 0

      if (sectionView) {
        itens.classList.add("ativo")
      }
    })

    sectionsRightSlide.forEach((itens) => {
      const itensTop = itens.getBoundingClientRect().top
      if (window.matchMedia("(max-width: 420px)").matches) {
        sectionsTop = window.innerHeight * 0.7;
        const lis = document.querySelectorAll(".faculdade li")
        const sectionView = (itensTop - sectionsTop) < 0
        if (sectionView) {
          itens.classList.add("ativo")
        }
      } else {
        const sectionView = (itensTop - sectionsTop) < 0
        if (sectionView) {
          itens.classList.add("ativo")
        }
      }
    })
  }
  handleScroll()

  window.addEventListener("scroll", handleScroll)
}