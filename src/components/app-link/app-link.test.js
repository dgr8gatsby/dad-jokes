var AppLink = require ('./app-link');

describe ('app-link', () => {
  it ('creates a navigation link for the app', () => {
    //customElements.define ('app-link', class extends HTMLElement {});
    // Create a new instance of app-link
    const element = document.createElement ('app-link', {
      is: AppLink,
    });

    // Set attributes for element
    element.setAttribute ('link-name', 'Home');
    element.setAttribute ('link-route', 'home');

    // Add custom element to the DOM
    document.body.appendChild (element);

    //Query for the element with
    const appLinkElement = document.body.querySelector ('app-link');

    return Promise.resolve ().then (() => {
      expect (appLinkElement.name).toBe ('Home');
    });
  });
});
