import styled from "styled-components";

export const StyledCardWrapper = styled((props) => <div {...props} />)`
  display: flex;
  background: #f8f6f6;
  padding: 0.5rem;
  border-radius: 0.3rem;
  justify-content: center;
  align-items: center;
  margin: 2.5rem;
  max-width: 22rem;
`;

export const StyledItems = styled((props) => <div {...props} />)`
  padding: 10px;
`;
