export default style => `
<style>${style}</style>
<div class="app-header">
    <slot name="header"></slot>
</div>
<div class="content">
    <p name="screens"></p>
</div>
<div class="footer">
    <p>Meow Mau</p>
</div>
`;
