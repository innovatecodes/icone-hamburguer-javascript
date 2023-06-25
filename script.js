'use strict'
const bar = document.querySelector('.btn-toggle');
const content = document.querySelector('.content');
bar.addEventListener('click', iconToggle);
function iconToggle() {
  content.classList.toggle('active');
  if (content.classList.contains('active')) {
    bar.setAttribute('aria-pressed', true);
    bar.setAttribute('aria-label', 'Fechar menu');
    bar.setAttribute('aria-expanded', true);
  } else {
    bar.setAttribute('aria-pressed', false);
    bar.setAttribute('aria-label', 'Abrir menu');
    bar.setAttribute('aria-expanded', false)
  }
}