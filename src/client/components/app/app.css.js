export default `
  .container {
    display: grid;
    grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [end];
    grid-template-rows: [row1-start] 200px [row2-start] 200px [row3-start] 200px [end];
    font-family: var(--app-font-family);
  }

  .app-header {
    grid-column: col1-start / end;
    grid-row: row1-start / row2-start;
  }

  .content {
    grid-column: col1-start / end;
    grid-row: row2-start / row3-start;
  }

  .footer {
    display: grid;
    justify-content: center;
    font-family: var(--app-font-family);
  }
`;
