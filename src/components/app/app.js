// This class will be the container for the entire dad joke application
const ELEMENT_NAME = 'dad-joke-app';
const DEFAULT_SCREEN = 'add-joke';

class App extends HTMLElement {
  constructor () {
    super ();
    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }

  // static get observedAttributes(){
  //     return []
  // }

  // attributeChangedCallback(attribute, oldValue, newValue){}

  screen = null;

  connectedCallback () {
    this.render ();
    this.loadScreen ();
  }

  // Dynamically load screens
  async loadScreen (name = DEFAULT_SCREEN /* Default screen */) {
    // Check if the screen has already been loaded
    if (customElements.get (name) != undefined) {
      this.displayScreen (name);
    } else {
      let screenPath = `./screens/${name}/${name}.js`;
      console.log (screenPath);
      const screenConstructor = await import (screenPath);
      this.screen = screenConstructor;
      this.displayScreen ();
      console.log (this.screen);
    }
  }

  displayScreen (name) {}

  render () {
    this.shadowRoot.innerHTML = `
        <h1>Dad Jokes</h1>
        <p>
            <slot name="header"></slot>
            <slot name="body"></slot>
        </p>
      `;
  }
}

if (customElements.get (ELEMENT_NAME) === undefined) {
  customElements.define (ELEMENT_NAME, App);
}
