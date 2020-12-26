import AppHeader from './app-header/app-header.js';

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
        throw new CustomError (
          `Unable to load module`,
          `${name}.js might not exist, this is the ${screenPath}`
        );
      }
    }
  }

  displayScreen (name) {
    const screenElement = this.shadowRoot.querySelector ("p[name='screens']");
    screenElement.innerHTML = '';
    screenElement.innerHTML = `<${name}></${name}>`;
  }

  render () {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: grid;
          grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [end];
          grid-template-rows: [row1-start] 200px [row2-start] 200px [row3-start] 200px [end];
        }

        .app-header {
          grid-column: col1-start / end;
          grid-row: row1-start / row2-start;
        }

        .content {
          grid-column: col1-start / end;
          grid-row: row2-start / row3-start;
        }

        .footer {
          grid-column: col1-start / end;
          grid-row: row3-start / end;
        }
      </style>

      <div class="app-header">
        <slot name="header"></slot>
      </div>
      <div class="content">
        <p name="screens"></p>
      </div>
      <div class="footer">
        <p>Meow Mau</p>
      </div>

      `;
  }
}

customElements.define (ELEMENT_NAME, App);
