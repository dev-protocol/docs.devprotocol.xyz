// For syntax highlighting only
const html = String.raw;

class LangSwitch extends HTMLElement {
  constructor() {
    super();

    this.STORAGE_KEY = 'lang';
  }

  connectedCallback() {
    this.render();
  }

  applySetting(passedSetting) {
		var langFromUrl = null;
		if (window.location.pathname.substring(0,1) == '/' && window.location.pathname.substring(3) == '/') {
			langFromUrl = window.location.pathname.substring(1,3);
		}
    let currentSetting = passedSetting || langFromUrl || localStorage.getItem(this.STORAGE_KEY);
    localStorage.setItem(this.STORAGE_KEY, currentSetting);
    this.setButtonLabelAndStatus(currentSetting);
  }

  setButtonLabelAndStatus(currentSetting) {
    for (let i = 0; i < this.modeToggleButton.children.length; i++) {
      let opt = this.modeToggleButton.children[i];
      if (currentSetting === opt.getAttribute('value')) {
        this.modeToggleButton.children[i].setAttribute('selected', '');
      }
    }
  }

  render() {
    this.innerHTML = html`
      <div class="[ lang-switch ] [ md:ta-right gap-bottom-500 ]">
        <select class="[ select ] [ font-base text-base ] [ js-lang-select ] bg-white dark:bg-gray-800 shadow-md leading-tight rounded border-gray-200">
          <option value="en">English (en)</option>
          <option value="pt">Português (pt)</option>
        </select>
      </div>
    `;

    this.afterRender();
  }

  afterRender() {
    this.modeToggleButton = document.querySelector('.js-lang-select');

    this.modeToggleButton.addEventListener('change', evt => {
      const lang = evt.target.value;
      evt.preventDefault();
      this.applySetting(lang);
      const url = location.protocol + '//' + location.host + '/' + lang;
      location.href = url;
    });

    this.applySetting();
  }
}

if ('customElements' in window) {
  customElements.define('lang-switch', LangSwitch);
}

export default LangSwitch;
