import Image from "next/image";

import { StyledSectionParagraph } from "../../components/Typography/elements";

import { StyledCardWrapper, StyledItems } from "./elements";

export default function Card(props) {
  const { image, title, children } = props;

  return (
    <StyledCardWrapper>
      <StyledItems>
        <Image src={image} width={56} height={56} layout="fixed" />
      </StyledItems>

      <StyledItems>
        <StyledSectionParagraph>{title}</StyledSectionParagraph>
        <p>{children}</p>
      </StyledItems>
    </StyledCardWrapper>
  );
}
