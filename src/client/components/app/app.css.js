export default `
  article {
    min-height: 100%;
    display: inline-grid;
    grid-template-rows: auto 2fr auto;
    grid-template-columns: 100%;
    align-content: center;  
  }

  main {
    align-content: center;
    display: inline-grid;
    margin-left: 5%;
    margin-right: 5%;
  }

  header {
      border-bottom: 1px solid orange;
  }

  footer {
      font-family: var(--app-font-family);
      justify-self: center;
  }
`;
