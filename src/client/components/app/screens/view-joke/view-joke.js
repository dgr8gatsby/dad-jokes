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

  props = {
    _id: '5fe69c4f842ba5a859b21416',
    type: 'question',
    headline: 'loading...',
    punchline: 'loading...',
    __v: 0,
  };

  async connectedCallback () {
    const response = await fetch ('/api/joke');
    this.props = await response.json ();
    console.log (this.props);
    this.render ();
  }

  render () {
    this.shadowRoot.innerHTML = template (style, this.props);
  }
}

customElements.define (ELEMENT_NAME, ViewJoke);
