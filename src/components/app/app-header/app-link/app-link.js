// This class will be the container for the entire dad joke application

const ELEMENT_NAME = 'app-link';

export default class AppLink extends HTMLElement {
  constructor () {
    super ();
    this.handleClick = this.handleClick.bind (this);
    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }

  handleClick (e) {
    e.preventDefault ();
    const event = new CustomEvent ('navigate', {
      detail: this.route,
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent (event);
  }

  static get observedAttributes () {
    return ['link-name', 'link-route'];
  }

  get name () {
    return this.getAttribute ('link-name');
  }

  get route () {
    return this.getAttribute ('link-route');
  }

  attributeChangedCallback (attribute, oldValue, newValue) {
    this.render ();
  }

  connectedCallback () {
    this.addEventListener ('click', this.handleClick, false);
    this.render ();
  }

  render () {
    this.shadowRoot.innerHTML = `
        <style>
          a {     
            color: black;
            padding: 12px;
            text-decoration: none;
            font-size: 18px; 
            line-height: 25px;
            border-radius: 4px;
          }
          a:hover {
            background-color: #ddd;
            color: black;
          }
          a.active {
            background-color: dodgerblue;
            color: white;
          }
    
        </style>
        <span>
          <a href="#${this.route}">${this.name}</a>
        </span>
      `;
  }
}

customElements.define (ELEMENT_NAME, AppLink);
