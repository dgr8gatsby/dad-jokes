// This class will be the container for the entire dad joke application
class App extends HTMLElement {
  constructor () {
    super ();
    var shadow = this.attachShadow ({
      mode: 'open',
      delegatesFocus: true,
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
        <h1>Dad Joke App Container</h1>
        <p>
            <slot></slot>
        </p>
      `;
  }
}

customElements.define ('dad-joke-app', App);
