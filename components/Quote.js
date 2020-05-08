import styled from "styled-components";
import QuoteOpen from "public/assets/img/layout/quoteOpen.svg";
import QuoteClose from "public/assets/img/layout/quoteClose.svg";

function Quote() {
  return (
    <FullContainer>
      <QuoteContainer>
        <QuoteOpen />
        <TextContainer>
          <p>
            Aquí va a una quote de alguien que ya tomó el taller y que dijo que
            está bárbaro y que le cambió la vida
          </p>
          <div>
            <h6>Juan José de Régules</h6>
            <label>CEO Sherpa-X</label>
            <img
              src="/assets/img/layout/profile.jpg"
              alt="Juan José de Régules"
            />
          </div>
        </TextContainer>
        <QuoteClose />
      </QuoteContainer>
    </FullContainer>
  );
}

export default Quote;

const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 5%;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    color: ${(props) => props.theme.colors.accent};
    font-size: 2.5rem;
    font-weight: 400;
    max-width: 660px;
    text-align: center;
    padding: 17% 2% 4%;
  }
  div {
    font-size: 1.5rem;
    display: grid;
    text-align: right;
    grid-template-columns: auto, 33px;
    grid-template-rows: 16px, 16px;
    position: relative;
    padding-top: 20px;
    &::before {
      content: " ";
      height: 2px;
      background-color: ${(props) => props.theme.colors.foreground_lower};
      width: 280px;
      position: absolute;
      top: 0;
      left: -50px;
    }
    h6 {
      font-size: inherit;
      margin: 0;
      grid-row: 1 / span 1;
      align-self: flex-end;
    }
    label {
      grid-row: 2 / span 1;
    }
    img {
      width: 43px;
      height: 43px;
      border-radius: 50%;
      grid-row: 1 / span 2;
      margin-left: 10px;
    }
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 150px;
    height: 150px;
    opacity: 0.8;
    :nth-of-type(1) {
      align-self: flex-start;
    }
    :nth-of-type(2) {
      align-self: flex-end;
      margin-bottom: -5%;
    }
    path {
      fill: ${(props) => props.theme.colors.foreground};
      box-shadow: ${(props) =>
        `-2px -4px 11px ${props.theme.colors.lightlight},
        2px 2px 4px ${props.theme.colors.lightshadow}`};
    }
  }
`;
