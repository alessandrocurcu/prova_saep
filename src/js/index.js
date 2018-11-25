const imagesLoaded = require('imagesloaded');

(function IIFE() {
  'use strict';

  window.addEventListener('DOMContentLoaded', () => {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    const primaryNavigationItems = document.querySelectorAll(
      '.primary-navigation__item'
    );

    const primaryNavigation = document.getElementById('primary-nav');

    const hamburgher = document.getElementById('hamburgher');

    hamburgher.addEventListener('click', e => {
      primaryNavigation.classList.toggle('toggle-nav');
    });

    const toggleClick = e => {
      // console.log(!e.currentTarget.children[1].classList.contains('js-toggle'));
      // if (e.currentTarget.children.length !== 2) return;
      // e.preventDefault();
      // if (!e.currentTarget.children[1].classList.contains('js-toggle')) {
      //   e.currentTarget.children[1].classList.toggle('js-toggle');
      // }
    };

    const toggleHover = e => {
      if (e.currentTarget.children.length !== 2) return;

      e.currentTarget.children[1].classList.toggle('js-toggle');
    };

    primaryNavigationItems.forEach(el => {
      el.addEventListener('mouseenter', toggleHover);
      el.addEventListener('mouseleave', toggleHover);
      el.addEventListener('click', toggleClick);
    });
  });

  const loginbtn = document.getElementById('login');
  if (!loginbtn) return;
  loginbtn.addEventListener('click', e => {
    e.preventDefault();
    location.href = './personal.html';
  });
})();
