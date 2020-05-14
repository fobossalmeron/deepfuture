import styled from "styled-components";
import { readableColor } from "polished";


const Tag = styled.span`
  background-color: ${(props) => props.color};
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 10%;
  color: ${(props) =>
    readableColor(
      props.color,
      props.theme.colors.foreground.toString(),
      props.theme.colors.background.toString(),
      true
    )};
  b {
    font-weight: 500;
  }
`;

export default Tag;
