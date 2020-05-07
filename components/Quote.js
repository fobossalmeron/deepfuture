import styled from "styled-components";
import Time from "public/assets/img/layout/icons/time.svg";
import Quotes from "public/assets/img/layout/quotes.svg";

function Quote() {
  return (
    <QuoteContainer>
      <span>
        <Quotes />
      </span>
      <p>
        Aquí va a una quote de alguien que ya tomó el taller y que dijo que está
        bárbaro y que le cambió la vida
      </p>
      <div>
        <h6>Juan José de Régules</h6>
        <label>CEO Sherpa-X</label>
      </div>
      <span>
        <Quotes />
      </span>
    </QuoteContainer>
  );
}

export default Quote;

const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  svg {
    width: 100px;
    height: 100px;
    path {
      fill: ${(props) => props.theme.colors.accent};
      box-shadow: ${(props) =>
        `-2px -4px 11px ${props.theme.colors.lightlight},
        2px 2px 4px ${props.theme.colors.lightshadow}`};
    }
  }
  p {
    color: ${(props) => props.theme.colors.accent};
    font-size: 2.5rem;
    font-weight: 300;
    max-width: 660px;
    text-align: center;
  }
  div {
    font-size: 2rem;
  }
`;
