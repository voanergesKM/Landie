import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 255px;
  &::before {
    content: url(${p => p.image});
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-bottom: 14px;
  }
`;
