const imagesLoaded = require('imagesloaded');

(function IIFE() {
  'use strict';

  window.addEventListener('DOMContentLoaded', () => {
    const dropdownMenus = document.querySelectorAll('.dropdownMenu');

    const primaryNavigationItems = document.querySelectorAll(
      '.primaryNavigation__item'
    );

    const toggleClick = e => {
      if (typeof e.currentTarget.children[0].children[0] === 'undefined')
        return;
      e.preventDefault();
      e.currentTarget.children[0].classList.toggle('toggle');
    };

    const toggleHover = e => {
      if (typeof e.currentTarget.children[0].children[0] === 'undefined')
        return;

      e.currentTarget.children[0].classList.toggle('toggle');
    };

    primaryNavigationItems.forEach(el => {
      el.addEventListener('mouseenter', toggleHover);
      el.addEventListener('mouseleave', toggleHover);
    });
  });

  const loginbtn = document.getElementById('login');
  if (!loginbtn) return;
  loginbtn.addEventListener('click', e => {
    e.preventDefault();
    location.href = './personal.html';
  });
})();

// const wrapper = document.getElementById('wrapper');

// document.addEventListener('click', e => {
//   e.preventDefault();
//   wrapper.classList.toggle('js-change-view');
// });

// const formHookButton = document.getElementById('form_hook_button');

// console.log(formHookButton);

// console.log(primaryNavigationItems);
