import AppHeader from '../app-header/app-header.js';

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

  // static get observedAttributes(){
  //     return []
  // }

  // attributeChangedCallback(attribute, oldValue, newValue){}

  screen = null;

  connectedCallback () {
    this.shadowRoot.addEventListener ('navigate', this.handleNavigate);
    this.render ();
    this.loadScreen ();
  }

  handleNavigate (e) {
    if (e != undefined) {
      this.loadScreen (e.detail);
      console.log (`Navigate to: ${e.detail}`);
    } else {
      console.log (`handleNavigation is initializing`);
    }
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
        console.log (screenPath);
        const screenConstructor = await import (screenPath);
        this.screen = screenConstructor;
        this.displayScreen (name);
        console.log (this.screen);
      } catch (e) {
        throw new CustomError (
          `Unable to load module`,
          `${name}.js might not exist, this is the ${screenPath}`
        );
      }
    }
  }

  displayScreen (name) {
    const screenElement = this.shadowRoot.querySelector ("p[name='screens']");
    console.log (screenElement);
    screenElement.innerHTML = '';
    screenElement.innerHTML = `<${name}></${name}>`;
  }

  render () {
    this.shadowRoot.innerHTML = `
        <h1>Dad Jokes</h1>
        <p>
            <slot name="header"></slot>
            <p name="screens"></p>
        </p>
      `;
  }
}

if (customElements.get (ELEMENT_NAME) === undefined) {
  customElements.define (ELEMENT_NAME, App);
}
