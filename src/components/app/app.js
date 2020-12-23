// This class will be the container for the entire dad joke application
const ELEMENT_NAME = 'dad-joke-app';

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

  connectedCallback () {
    this.render ();
  }

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
