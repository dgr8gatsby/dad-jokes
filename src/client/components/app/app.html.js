export default style => `
<style>${style}</style>
<article>
    <header class="app-header">
        <slot name="header"></slot>
    </header>
    <main class="content">
        <p name="screens"></p>
    </main>
    <footer class="footer">
        <p>Meow Mau</p>
    </footer>
</article>
`;
