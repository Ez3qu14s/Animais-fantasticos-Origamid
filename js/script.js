import ScrollSuave from './modules/scroll-suave.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

initAnimacaoScroll();
initModal();
initTooltip();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
