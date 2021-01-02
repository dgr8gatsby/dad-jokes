import template from './add-joke.html.js';
import style from './add-joke.css.js';

const ELEMENT_NAME = 'add-joke';
const API_ROUTE = '/api/jokes';

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
    var formData = new Array ([...new FormData (form)])[0];

    let postString = '';

    for (var i = 0; i < formData.length; i++) {
      let encodedValue = encodeURI (formData[i][1]);
      postString += `${formData[i][0]}=${encodedValue}`;
      if (i < formData.length - 1) {
        postString += '&';
      }
    }

    const XHR = new XMLHttpRequest ();
    const FD = new FormData (form);

    XHR.addEventListener ('load', event => {
      console.log (event.target.responseText);
    });

    XHR.addEventListener ('error', event => {
      console.log (event);
    });

    XHR.open ('POST', API_ROUTE);

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

    // Replace the '%20' with '+'
    XHR.send (postString.replace (/%20/g, '+'));
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
