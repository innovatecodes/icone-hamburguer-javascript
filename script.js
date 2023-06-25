'use strict'
const bar = document.querySelector('.btn-toggle');
const content = document.querySelector('.content');
bar.addEventListener('click', iconToggle);
function iconToggle() {
  content.classList.toggle('active');
}