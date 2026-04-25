const elements = document.querySelectorAll('.fade, .product-row, .slide-left, .slide-right, .zoom-in, .fade-up');

function showOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);