const ELEMENT_NAME = 'add-joke';

export default class AddJoke extends HTMLElement {
  constructor () {
    super ();

    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }
}

customElements.define (ELEMENT_NAME, AddJoke);
