// This class will be the container for the entire dad joke application
class AppScreen extends HTMLElement {
  constructor () {
    super ();
    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }

  static get observedAttributes () {
    return [screen];
  }

  attributeChangedCallback (attribute, oldValue, newValue) {
    // Try to find a view component based off the screen attribute
  }

  connectedCallback () {
    this.render ();
  }

  render () {
    this.shadowRoot.innerHTML = `
    <slot></slot>
        `;
  }
}

customElements.define ('app-screen', AppScreen);
