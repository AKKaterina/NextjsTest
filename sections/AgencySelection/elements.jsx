import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled((props) => (
  <Image {...props} variant="contained" color="main" />
))`
  width: 100%;
  heigth: 100%;
`;

export const StyledAgencyWrapper = styled((props) => <div {...props} />)`
  display: flex;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
