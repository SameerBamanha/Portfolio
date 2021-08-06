import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome
      </SectionTitle>
      <SectionText>
        Hi there, My name is Sameer Bamanha, I am practicing web development. I
        am currently working as Associate software engineer in Accenture.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = `https://drive.google.com/file/d/1q0OfiCd9POYhXRFFP8posukXXMAjAMm5/view?usp=sharing`)
        }
      >
        Check my resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
