import AppHeader from './app-header/app-header.js';
import template from './app.html.js';
import style from './app.css.js';

// This class will be the container for the entire dad joke application
const ELEMENT_NAME = 'dad-joke-app';
const DEFAULT_SCREEN = 'view-joke';

class App extends HTMLElement {
  constructor () {
    super ();
    this.handleNavigate = this.handleNavigate.bind (this);
    var shadow = this.attachShadow ({
      mode: 'open',
    });

    this.AppHeaderComponent = AppHeader;
  }

  screen = null;

  connectedCallback () {
    this.shadowRoot.addEventListener ('navigate', this.handleNavigate);
    this.render ();
    this.loadScreen ();
  }

  handleNavigate (e) {
    this.loadScreen (e.detail);
  }

  // Dynamically load screens
  async loadScreen (name = DEFAULT_SCREEN /* Default screen */) {
    // Check if the screen has already been loaded
    if (customElements.get (name) != undefined) {
      // This doesn't deal with an out of date screen that has already loaded
      this.displayScreen (name);
    } else {
      try {
        let screenPath = `./screens/${name}/${name}.js`;
        const screenConstructor = await import (screenPath);
        this.screen = screenConstructor;
        this.displayScreen (name);
      } catch (e) {
        err = new Error (
          `${name}.js might not exist, this is the ${screenPath}`
        );
        err.name = `ModuleLoad`;
        throw err;
      }
    }
  }

  displayScreen (name) {
    const screenElement = this.shadowRoot.querySelector ("p[name='screens']");
    screenElement.innerHTML = '';
    screenElement.innerHTML = `<${name}></${name}>`;
  }

  render () {
    this.shadowRoot.innerHTML = template (style);
  }
}

customElements.define (ELEMENT_NAME, App);
