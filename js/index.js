console.log('prova');

const wrapper = document.getElementById('wrapper');

// document.addEventListener('click', e => {
//   e.preventDefault();
//   wrapper.classList.toggle('js-change-view');
// });

const formHookButton = document.getElementById('form_hook_button');

const dropdownMenus = document.querySelectorAll('.dropdownMenu');

const primaryNavigationItems = document.querySelectorAll(
  '.primaryNavigation__item'
);

console.log(primaryNavigationItems);

const toggleClick = e => {
  if (typeof e.currentTarget.children[1] === 'undefined') return;
  e.preventDefault();
  e.currentTarget.children[1].classList.toggle('toggle');
};

const toggleHover = e => {
  console.log(e.currentTarget.children[0]);
  if (typeof e.currentTarget.children[0].children[0] === 'undefined') return;
  // e.preventDefault();
  e.currentTarget.children[0].classList.toggle('toggle');
};

primaryNavigationItems.forEach(el => {
  // el.addEventListener('click', toggle);
  el.addEventListener('mouseenter', toggleHover);
  el.addEventListener('mouseleave', toggleHover);
  // el.addEventListener('click', toggle);
});
