import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  height: 100%;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  margin: 0 auto;

  background-image: url(${p => p.image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;
