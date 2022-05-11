import Card from "../../collections/Card/Card";
import { StyledAgencyWrapper, StyledImage } from "./elements";

const cardProps = {
  image: "/img/business.png",
  title: "Brief",
  children: (
    <p>
      Complete brief writing or simple guidance on what to include, we have got
      covered
    </p>
  ),
};

export function AgencySelection() {
  return (
    <>
      <div>
        <h1>Managed agency selection</h1>
        <p>Stengthen your onboarding process</p>
      </div>
      <StyledAgencyWrapper>
        <StyledImage
          src={"/img/video.png"}
          width={380}
          height={550}
          layout="fixed"
        />

        <div>
          <Card {...cardProps}></Card>
          <Card {...cardProps}></Card>
          <Card {...cardProps}></Card>
        </div>
      </StyledAgencyWrapper>
    </>
  );
}
