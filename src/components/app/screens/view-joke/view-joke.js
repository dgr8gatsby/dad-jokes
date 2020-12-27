import template from './view-joke.html.js';
import style from './view-joke.css.js';
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
    this.shadowRoot.innerHTML = template (style);
  }
}

customElements.define (ELEMENT_NAME, ViewJoke);
