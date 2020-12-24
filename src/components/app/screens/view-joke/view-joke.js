const ELEMENT_NAME = 'view-joke';

export default class ViewJoke extends HTMLElement {
  constructor () {
    super ();

    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }
}

customElements.define (ELEMENT_NAME, ViewJoke);
