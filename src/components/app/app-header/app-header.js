import AppLink from './app-link/app-link.js';

// This class will be the container for the entire dad joke application
const ELEMENT_NAME = 'app-header';

export default class AppHeader extends HTMLElement {
  constructor () {
    super ();
    var shadow = this.attachShadow ({
      mode: 'open',
      delegatesFocus: true,
    });

    this.AppLinkElement = AppLink;
  }

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
        display: grid;
        grid-template-columns: [col1-start] 1fr [col2-start] 1fr [end];
      }

      .header logo {
        font-size: 25px;
        font-weight: bold;
        grid-column: col1-start / col2-start;
      }

      .header-right {
        grid-column: col2-start / end;
        justify-self: end;
      }

    </style>

    <div class="header">
    <div class="logo">
      <svg height='50px' width='50px'  fill="#FF8400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" x="0px" y="0px"><defs><style>.cls-1{fill:none;}.cls-1,.cls-2{stroke:#FF8400;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}</style></defs><title>Laughing-Emoji-Emotion-Face-Expression-Feeling_5</title><path class="cls-1" d="M132.73,75.14a123,123,0,0,1,16.68-8.74c-5.58-28.65-19.75-55.57-54-56C59.4,10,13,46.81,18.51,86.21c4.61,33.18,31.94,47.86,60.27,53.63Q83.26,131,88,123.13"></path><path class="cls-1" d="M255,466.37c124.26,0,158.14-64.2,127.65-124C346.46,271.33,255,272.58,255,272.58s-91.42-1.25-127.64,69.79C96.9,402.17,130.78,466.37,255,466.37Z"></path><path class="cls-1" d="M379.27,75.14a123,123,0,0,0-16.68-8.74c5.58-28.65,19.75-55.57,54-56,36-.43,82.33,36.38,76.86,75.78-4.61,33.18-31.94,47.86-60.27,53.63q-4.49-8.88-9.17-16.71"></path><path class="cls-1" d="M379.28,75.13c-28.64-18-66.74-24.67-123.28-24.67s-94.64,6.69-123.28,24.67"></path><path class="cls-1" d="M424.1,123.21c22.07,36.81,39.61,90.31,64.12,166.42C538.1,444.52,414.73,501,256,501S-26.1,444.52,23.78,289.63C48.29,213.52,65.83,160,87.9,123.21"></path><path class="cls-2" d="M290.06,314.45c0,11.76-33.29,28.15-33.29,28.15s-33.29-16.39-33.29-28.15,14.91-13.17,33.29-13.17S290.06,302.69,290.06,314.45Z"></path><line class="cls-1" x1="256.77" y1="342.6" x2="256.77" y2="372.64"></line><path class="cls-1" d="M200.31,406.49h111.3c3.93-9,6.14-23.15,6.14-33.85H194.17C194.17,383.34,196.37,397.46,200.31,406.49Z"></path><line class="cls-1" x1="256.77" y1="342.6" x2="256.77" y2="372.64"></line><path class="cls-1" d="M200.31,406.49h111.3c3.93-9,6.14-23.15,6.14-33.85H194.17C194.17,383.34,196.37,397.46,200.31,406.49Z"></path><polyline class="cls-1" points="149.24 272.5 187.87 255.56 149.24 238.62"></polyline><polyline class="cls-1" points="364.3 272.5 325.67 255.56 364.3 238.62"></polyline><path class="cls-2" d="M200.31,406.49c10,22.94,31.16,34.76,55.65,34.76s45.65-11.82,55.65-34.76Z"></path></svg>
    </div>
    <div class="header-right">
        <slot name="navigation">
        </slot>
    </div>
    </div>
        `;
  }
}

customElements.define (ELEMENT_NAME, AppHeader);
