// This class will be the container for the entire dad joke application
const ELEMENT_NAME = 'app-header';

class AppHeader extends HTMLElement {
  constructor () {
    super ();
    this.handleNavigate = this.handleNavigate.bind (this);
    var shadow = this.attachShadow ({
      mode: 'open',
      delegatesFocus: true,
    });
  }

  handleNavigate (e) {
    if (e != undefined) {
      console.log (`Navigate to: ${e.detail}`);
    } else {
      console.log (`handleNavigation is initializing`);
    }
  }

  connectedCallback () {
    this.shadowRoot.addEventListener ('navigate', this.handleNavigate);
    this.render ();
  }

  render () {
    this.shadowRoot.innerHTML = `
    <style>
        * {box-sizing: border-box;}

        body { 
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        }

        .header {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 20px 10px;
        }

        .header a.logo {
        font-size: 25px;
        font-weight: bold;
        }

        .header-right {
            float: right;
        }

        @media screen and (max-width: 500px) {
            .header-right {
                float: none;
            }
        }
    </style>

    <div class="header">
    <a href="#default" class="logo">CompanyLogo</a>
    <div class="header-right">
        <slot name="navigation">
        </slot>
    </div>
    </div>
        `;
  }
}

customElements.define (ELEMENT_NAME, AppHeader);
