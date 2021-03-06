import styled from "styled-components";

export const WrapperContent = styled.div`
  padding: 15px;
  border-top: 1px solid rgb(205, 208, 210);
  line-height: 1.5;
  color: rgb(69, 69, 69);
`;

export const Article = styled.article`
  text-align: justify;
`;

export const SubHeader = styled.h2`
  margin-top: 0;
  font-size: 20px;
`;

export const Paragraph = styled.p`
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 800px;
`;

export const Figcaption = styled.figcaption`
  font-size: 14px;
  color: rgb(130, 130, 130);
  text-align: center;
`;
