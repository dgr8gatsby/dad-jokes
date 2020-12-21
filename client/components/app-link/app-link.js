// This class will be the container for the entire dad joke application
class AppLink extends HTMLElement {
  constructor () {
    super ();
    var shadow = this.attachShadow ({
      mode: 'open',
      delegatesFocus: true,
    });
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
        </style>
        <a href="#${this.route}">${this.name}</a>
      `;
  }
}

customElements.define ('app-link', AppLink);
