export default (style, props) => `
<style>${style}</style>
<article class='primary'>
    <h1>View Joke Screen</h1>
    <p>
        <div>${props.headline}</div>
        <div>${props.punchline}</div>
    </p>
</article>
`;
