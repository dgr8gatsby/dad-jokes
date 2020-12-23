const ELEMENT_NAME = 'add-joke';

class AddJoke extends HTMLElement {
  constructor () {
    super ();

    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }
}
