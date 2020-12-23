// This class will be the container for the entire dad joke application

const ELEMENT_NAME = 'app-link';

class AppLink extends HTMLElement {
  constructor () {
    super ();
    this.handleClick = this.handleClick.bind (this);
    var shadow = this.attachShadow ({
      mode: 'open',
    });
  }

  handleClick (e) {
    if (e != undefined) {
      e.preventDefault ();

      console.log (this.route);

      const event = new CustomEvent ('navigate', {
        detail: this.route,
        composed: true,
        bubbles: true,
      });
      this.dispatchEvent (event);
    } else {
      console.log (`onclick event is initializing`);
    }
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
            float: left;
            color: black;
            text-align: center;
            padding: 12px;
            text-decoration: none;
            font-size: 18px; 
            line-height: 25px;
            border-radius: 4px;
          }
          @media screen and (max-width: 500px) {
            a {
                float: none;
                display: block;
                text-align: left;
            }
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
        <a href="#${this.route}" onclick="${this.handleClick ()}">${this.name}</a>
      `;
  }
}

customElements.define (ELEMENT_NAME, AppLink);
