export default (style, props) => `
<style>${style}</style>
<article class='primary'>
    <p class='joke'>
        <div class='headline'>${props.headline}</div>
        <div class='punchline'>${props.punchline}</div>
    </p>
</article>
`;
