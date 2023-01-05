export class Component01 {
  constructor(root) {
    this.render(root);

    this.DOM = {
      dropdown: document.querySelector('[data-dropdown]'),
      trigger: document.querySelector('[data-trigger]'),
    };

    this.DOM.trigger.addEventListener('click', this.toggleDropdown);
    document.documentElement.addEventListener('click', this.documentHandler);
  }

  /**
   * @function toggleDropdown - Button click event handler
   */
  toggleDropdown = () => {
    this.DOM.dropdown.classList.toggle('show');
    this.DOM.trigger.querySelector('i').classList.toggle('arrow');
  };

  /**
   * @function documentHandler - Document click event handler
   * @returns {void|boolean}
   */
  documentHandler = ({ target }) => {
    if (!target.matches('[data-trigger]')) {
      if (this.DOM.dropdown.classList.contains('show')) {
        this.toggleDropdown();
      }
    }
  };

  render = (root) => {
    const data = [
      {
        ico: `<i class='bx bx-plus-circle'></i>`,
        label: 'Create New',
      },
      {
        ico: `<i class='bx bx-book'></i>`,
        label: 'All Drafts',
      },
      {
        ico: `<i class='bx bx-folder'></i>`,
        label: 'Move To',
      },
      {
        ico: `<i class='bx bx-user'></i>`,
        label: 'Profile Settings',
      },
      {
        ico: `<i class='bx bx-bell'></i>`,
        label: 'Notification',
      },
      {
        ico: `<i class='bx bx-cog'></i>`,
        label: 'Settings',
      },
    ];
    document.head.innerHTML += `<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>`;

    document.querySelector(root).innerHTML = `
<div class='dropdown'>
  <button class='dropdown__trigger' data-trigger>
      Dropdown
      <i class='bx bx-chevron-down'></i>
  </button>
  <ul class='dropdown__list' data-dropdown>
    ${data.map(({ ico, label }) => `
      <li class='dropdown__item'>
          <a href='#' class='dropdown__link'>${ico} ${label}</a>
      </li>
    `).join('')}
  </ul>
</div>
`;
  };
}
