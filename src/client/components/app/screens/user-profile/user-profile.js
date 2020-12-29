const ELEMENT_NAME = 'user-profile';
import template from './user-profile.html.js.js.js.js';
import style from './user-profile.css.js.js.js.js';

export default class UserProfile extends HTMLElement {
  constructor () {
    super ();
    this.shadow = this.attachShadow ({
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

customElements.define (ELEMENT_NAME, UserProfile);
