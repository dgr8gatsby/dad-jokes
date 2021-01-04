export default (style, props) => `
<style>${style}</style>
<article class='primary'>
    <p class='joke'>
        <section class='headline'>${props.headline}</section>
        <section class='punchline'>${props.punchline}</section>
        <section class='why'>
            <span>Why is this funny?</span>${props.why}
        </section>
    </p>
</article>
`;
