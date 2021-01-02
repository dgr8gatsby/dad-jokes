export default style => `
<style>${style}</style>
<article>
<p>
        <form ref="form">
        <select name="type" id="joke-type">
            <option value="question">Question & Answer</option>
            <option value="rhetorical">Rhetorical Questions</option>
            <option value="oneliner">One-liner</option>
        </select>
        <input type="text" placeholder="headline" name="headline">
        <input type="text" placeholder="punchline" name="punchline">
        <button type="submit">Submit</button>
    </form>
    </p>
</article>
`;
