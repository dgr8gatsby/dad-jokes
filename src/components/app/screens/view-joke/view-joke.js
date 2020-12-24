const ELEMENT_NAME = 'view-joke';
/** This class renders a joke **/
export default class ViewJoke extends HTMLElement {
  /**
   * Represents a ViewJoke
   * @constructor
   */
  constructor () {
    super ();

    this.attachShadow ({
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
        <div>How do you handle a JavaScript bug?</div>
        <div>You console it!</div>
    </p>
  `;
  }
}

customElements.define (ELEMENT_NAME, ViewJoke);
