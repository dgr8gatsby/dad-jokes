const ELEMENT_NAME = 'add-joke';

export default class AddJoke extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<h1>Add Joke:</h1>
    <form action="/jokes" method="POST">
        <select name="type" id="joke-type">
            <option value="question">Question & Answer</option>
            <option value="rhetorical">Rhetorical Questions</option>
            <option value="oneliner">One-liner</option>
        </select>
        <input type="text" placeholder="headline" name="headline">
        <input type="text" placeholder="punchline" name="punchline">
        <button type="submit">Submit</button>
    </form>`;
  }
}

customElements.define (ELEMENT_NAME, AddJoke);
