//* === CSS & modules === */
import './style.css';
import stylesButtons from './button.module.css';
//* === add Img Vite === */
import imageStyle from './image.module.css';
import img from './src/img/imgOne.jpg';
//* === JSON === */
import data from './data.json';
//* === All Vite ===*/
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

//** === Modules === */
const modules = import.meta.glob('./modules/*.js');
//console.log(modules);
for (const path in modules) {
  modules[path]().then((module) => {
    module.load();
  });
}

//** ==== === DOM Javascript === ==== */
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div class="app-vite" id="idAppVite">
      <h1>Hello Platzi Vite!</h1>
      <button class="btn" id="btn">Click</button>
      <img id="img" />
      <pre>${JSON.stringify(data)}</pre>
    </div>
  </div>
`;

//* === Add Modules CSS === */
document.getElementById(`btn`).className = stylesButtons.btn;
//* === Call Img === */
const image = document.getElementById(`img`);
image.src = img;
image.classList = imageStyle.img;

//* === Counter === */
setupCounter(document.querySelector('#counter'));
