import styled from "styled-components";
import { H3, P } from "components/shared/Dangerously";
import Fade from "react-reveal/Fade";
import CircleIcon from "components/shared/CircleIcon";

function IconItem({ item, columned, light, dark, shadowColor }) {
  function IconFaded() {
    return (
      <Icon light={light} dark={dark} shadowColor={shadowColor}>
        {item.icon}
      </Icon>
    );
  }

  return (
    <Item>
      {!columned && (
        <Column>
          <IconFaded />
        </Column>
      )}
      <ColumnSecond>
        {columned && (
          <Column>
            <IconFaded />
          </Column>
        )}
        {item.title && <H3>{item.title}</H3>}
        {item.description && <P>{item.description}</P>}
      </ColumnSecond>
    </Item>
  );
}

export default IconItem;

const Item = styled.li`
  display: flex;
`;

const Column = styled.div`
  width: 30%;
  margin-right: 2%;
`;

const Icon = styled(CircleIcon)`
  width: 100px;
  height: 100px;
  margin-bottom: 18px;
  svg {
    padding: 22%;
  }
  @media (max-width: 1300px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

const ColumnSecond = styled.div`
  width: 68%;
  margin-right: 4%;
  h3 {
    font-size: 2.3rem;
    margin-bottom: 17px;
    font-weight: 400;
  }
  p {
    max-width: 340px;
  }
  @media (max-width: 1300px) {
    width: 91%;
    margin-right: 9%;
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 2rem;
    }
    p {
      max-width: 420px;
    }
  }
`;
