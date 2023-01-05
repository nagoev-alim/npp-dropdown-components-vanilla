// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';
import { Component01 } from './components/component01';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='components'>
    <div class='component01'></div>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;


// ⚡️Class instance
new Component01('.component01')
