import template from './add-joke.html.js';
import style from './add-joke.css.js';
const ELEMENT_NAME = 'add-joke';

export default class AddJoke extends HTMLElement {
  constructor () {
    super ();
    this.shadow = this.attachShadow ({
      mode: 'open',
    });
  }

  connectedCallback () {
    this.render ();
  }

  onFormSubmit (e) {
    e.preventDefault ();
    let form = e.target;

    const XHR = new XMLHttpRequest ();
    const FD = new FormData (form);

    XHR.addEventListener ('load', event => {
      console.log (event.target.responseText);
    });

    XHR.addEventListener ('error', event => {
      console.log (event);
    });

    XHR.open ('POST', 'jokes');
    XHR.send (FD);
  }

  render () {
    this.shadowRoot.innerHTML = template (style);
    this.refs = {
      form: this.shadowRoot.querySelector ('[ref="form"]'),
    };

    this.refs.form.addEventListener ('submit', this.onFormSubmit);
  }
}

customElements.define (ELEMENT_NAME, AddJoke);
