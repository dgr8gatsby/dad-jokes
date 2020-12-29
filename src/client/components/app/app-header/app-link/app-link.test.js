import AppLink from './app-link';

describe ('app-link', () => {
  // Clean up document
  afterEach (() => {
    document.getElementsByTagName ('html')[0].innerHTML = '';
  });
  // Test for name attribute
  it ('creates a navigation link for the app', () => {
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

  it ('fires a navigation event when an app-link element is clicked', () => {
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
    const clickEvent = new Event ('click');
    document.navigateDetail = null;

    document.addEventListener ('navigate', e => {
      document.navigateDetail = e.detail;
    });

    appLinkElement.dispatchEvent (clickEvent);

    return Promise.resolve ().then (() => {
      expect (document.navigateDetail).toBe ('home');
    });
  });
});
