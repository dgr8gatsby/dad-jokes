// This class will be the container for the entire dad joke application
class AppHeader extends HTMLElement {
  constructor () {
    super ();
    var shadow = this.attachShadow ({
      mode: 'open',
      delegatesFocus: true,
    });
  }

  // static get observedAttributes(){
  //     return []
  // }

  // attributeChangedCallback(attribute, oldValue, newValue){}

  connectedCallback () {
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

        .header a {
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px; 
        line-height: 25px;
        border-radius: 4px;
        }

        .header a.logo {
        font-size: 25px;
        font-weight: bold;
        }

        .header a:hover {
        background-color: #ddd;
        color: black;
        }

        .header a.active {
        background-color: dodgerblue;
        color: white;
        }

        .header-right {
        float: right;
        }

        @media screen and (max-width: 500px) {
        .header a {
            float: none;
            display: block;
            text-align: left;
        }
        
        .header-right {
            float: none;
        }
        }
    </style>
    
    <div class="header">
    <a href="#default" class="logo">CompanyLogo</a>
    <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
    </div>
        `;
  }
}

customElements.define ('app-header', AppHeader);
