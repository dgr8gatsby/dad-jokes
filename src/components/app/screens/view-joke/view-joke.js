const ELEMENT_NAME = 'view-joke';

export default class ViewJoke extends HTMLElement {
  constructor () {
    super ();

    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }

  connectedCallback () {
    this.render ();
  }

  render () {
    this.shadowRoot.innerHTML = `
    <h1>View Joke Screen</h1>
    <p>
        <h3>How do you handle a JavaScript bug?</h3>
        <h3>You console it!</h3>
    </p>
  `;
  }
}

customElements.define (ELEMENT_NAME, ViewJoke);
