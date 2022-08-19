import { debounce } from 'lodash';

const headerRef = document.querySelector('.header');

let screenWidth = window.innerWidth;

window.addEventListener('scroll', debounce(handleScroll, 50));

let scrollPos = 0;

if (screenWidth < 768) {
  scrollPos = 120;
} else {
  scrollPos = 70;
}

function handleScroll() {
  if (
    document.body.scrollTop > scrollPos ||
    document.documentElement.scrollTop > scrollPos
  ) {
    headerRef.classList.add('active');
  } else {
    headerRef.classList.remove('active');
  }
}
