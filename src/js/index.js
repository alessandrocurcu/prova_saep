// const imagesLoaded = require('imagesloaded');
// const Headroom = require('./headroom.js');
// const list = require('list.js');

(function IIFE() {
  'use strict';

  window.addEventListener('DOMContentLoaded', () => {
    console.log('ciao');
    const secondAddressBtn = document.getElementById('second-address-btn');

    const secondAddress = document.getElementById('second-address');

    if (secondAddressBtn) {
      secondAddressBtn.addEventListener('change', e => {
        secondAddress.classList.toggle('toggle');
      });
    }
    /* LIST */

    // const options = {
    //   valueName: ['name'],
    // };
    const options = {
      valueNames: ['name', 'nation'],
      fuzzySearch: {
        searchClass: 'fuzzy-search',
        location: 0,
        distance: 100,
        threshold: 0.4,
        multiSearch: true,
      },
    };
    const membersList = new List('members', options);

    // console.log(userList.fuzzySearch);
    // console.log(userList.fuzzySearch('Ale'));
    /** ************ */
    const header = document.getElementById('header');

    const headroom2 = new Headroom(header, { offset: 250, tolerance: 5 });

    headroom2.init();
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

    const enterHandler = e => {
      if (e.currentTarget.children.length !== 2) return;

      e.currentTarget.children[1].classList.toggle('js-toggle');
    };

    const leaveHandler = e => {
      if (e.currentTarget.children.length !== 2) return;

      e.currentTarget.children[1].classList.toggle('js-toggle');
    };

    primaryNavigationItems.forEach(el => {
      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);
      el.addEventListener('click', toggleClick);
    });

    const scoreButtons = document.querySelectorAll('[data-score]');

    const scoreApplyButton = document.getElementById('js-score-apply-button');

    const scoreView = document.getElementById('js-score');

    // const deleteBtns = document.querySelectorAll('fa-minus-circle');

    // const destroyInput = event => {

    // };

    let oldScore = 0;
    let check = 0;
    scoreButtons.forEach((el, i, array) => {
      const youWon = totScore => {
        if (totScore >= 30 && check === 0) {
          check = 1;
          scoreView.textContent = totScore;
          return 1;
        } else if (totScore < 30 && check === 1) {
          check = 0;
          scoreView.textContent = totScore;
          return 0;
        }
        scoreView.textContent = totScore;
        return 0;
      };

      const calculateNewScore = newScore => {
        oldScore += Number(newScore);
        console.log(oldScore);
        return oldScore;
      };

      const calculateNewScoreMinus = newScore => {
        oldScore -= Number(newScore);
        // console.log(oldScore);
        return oldScore;
      };

      const createInput = event => {
        const inputValue = event.target.previousElementSibling.value;
        const formCntr = event.target.parentElement.parentElement;
        const nodeDiv = document.createElement('div');
        const nodeP = document.createElement('p');
        const nodeI = document.createElement('i');
        nodeP.innerText = inputValue;
        nodeDiv.classList.add('criteria__inserted-document');
        nodeI.classList.add('fas');
        nodeI.classList.add('fa-minus-circle');
        nodeI.addEventListener('click', function() {
          youWon(calculateNewScoreMinus(event.target.dataset.score));
          this.parentElement.remove();
          // scoreApplyButton.classList.add('toggle');
        });
        nodeDiv.append(nodeP);
        nodeDiv.append(nodeI);
        formCntr.prepend(nodeDiv);

        // const nodeBtn = document.createElement('button');
        // const nodeFormControl = document.createElement('div');
        // nodeFormControl.classList.add('form__control');
        // nodeBtn.classList.add('btn');
        // nodeBtn.classList.add('btn--form');
        // nodeBtn.setAttribute('data-score', '1');
        // nodeFormControl.append(nodeInput);
        // nodeFormControl.append(nodeBtn);
      };

      el.addEventListener('click', e => {
        e.preventDefault();
        const inputValue = e.target.previousElementSibling.value;

        if (!inputValue || inputValue.length <= 3) return;
        // console.log(e.target.dataset.score);
        const { score } = e.target.dataset;

        if (youWon(calculateNewScore(score))) {
          console.log('ma');
          scoreApplyButton.classList.remove('toggle');
        } else {
          console.log('ehy');
          scoreApplyButton.classList.add('toggle');
        }
        createInput(e);
      });
    });
  });
  const loginbtns = document.querySelectorAll('.loginbtn');

  loginbtns.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = './personal.html';
    });
  });

  // const loginbtn = document.getElementById('loginbtn');
  // if (!loginbtn) return;
  // loginbtn.addEventListener('click', e => {
  //   e.preventDefault();
  //   location.href = './personal.html';
  // });

  const loginService = document.getElementById('login-service');
  const loginServiceBtn = document.getElementById('login-service-btn');
  if (loginServiceBtn) {
    loginServiceBtn.addEventListener('click', e => {
      loginService.classList.toggle('toggle');
    });
  }

  /* Score system */

  /** *** Tab */

  const tabMenu = document.getElementById('tabMenu');
  const tabMain = document.getElementById('tabMain');
  if (!tabMain) return;
  const tabMainItems = Array.from(tabMain.children);
  const tabMenuItems = Array.from(tabMenu.children);
  const edit = document.getElementById('edit');
  const save = document.getElementById('save');
  const informationTypeValue = document.querySelectorAll(
    '.information__type-value'
  );

  if (save) {
    save.addEventListener('click', e => {
      save.classList.toggle('toggle');
      edit.classList.toggle('toggle');
      informationTypeValue.forEach(el => {
        el.removeAttribute('contenteditable');
      });
    });
  }

  if (edit) {
    edit.addEventListener('click', e => {
      save.classList.toggle('toggle');
      edit.classList.toggle('toggle');
      informationTypeValue.forEach(el => {
        el.setAttribute('contenteditable', 'true');
      });
    });
  }

  tabMenuItems.forEach(el => {
    el.addEventListener('click', e => {
      console.log(el);
      tabMenuItems.forEach(elem => {
        elem.classList.remove('step--is-selected');
        elem.classList.remove('secondary-navigation__item--is-selected');
      });
      if (e.currentTarget.classList.contains('step')) {
        e.currentTarget.classList.add('step--is-selected');
      }

      if (e.currentTarget.classList.contains('secondary-navigation__item')) {
        e.currentTarget.classList.add(
          'secondary-navigation__item--is-selected'
        );
      }
      tabMainItems.forEach(ele => {
        ele.classList.add('toggle');
        if (e.currentTarget.dataset.tab === ele.dataset.tab) {
          ele.classList.toggle('toggle');
        }
      });
    });
  });
})();
