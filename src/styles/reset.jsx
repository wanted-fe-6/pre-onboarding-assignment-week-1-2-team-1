import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: 1440px;
  height: 100%;
  background-color: #fafafa;
  border-left: 1px solid #e2e2e2;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  & table,
  div,
  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;
