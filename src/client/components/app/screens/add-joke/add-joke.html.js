export default style => `
<style>${style}</style>
<article class="primary">
<p>
    <form ref="form">
        <fieldset>
            <legend>Create new joke</legend>
            <p>
                <label for="joke-type">Joke Type</label>
                <select name="type" id="joke-type">
                    <option value="question">Question & Answer</option>
                    <option value="rhetorical">Rhetorical Questions</option>
                    <option value="oneliner">One-liner</option>
                </select>
            </p>
            <p>
                <label for="headline">Headline</label>
                <input type="text" id="headline" placeholder="headline" name="headline">                
            </p>
            <p>
                <label for="punchline">Punchline</label>
                <input type="text" id="punchline" placeholder="punchline" name="punchline">
            </p>
            <p>
                <label for="why">Why?</label>
                <textarea id="why" name="why"></textarea>
        </fieldset>
        <p>
            <button type="submit">Submit</button>
        </p>
    </form>
    </p>
</article>
`;
