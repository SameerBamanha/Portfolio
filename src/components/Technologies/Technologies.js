import React from "react";
import { DiNodejs, DiReact } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on various frontend and backend projects using various Js
      Frameworks and MongoDB, I primilary use python and C++ for competitive
      programming.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
            Experience with <br />
            React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobephotoshop size="3rem" margin="4px" />
        <ListContainer>
          <ListTitle>Designing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
