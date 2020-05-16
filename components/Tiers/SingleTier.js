import styled from "styled-components";
import Fade from "react-reveal";
import { H3 } from "components/shared/Dangerously";
import { darken } from "polished";
import currency from "currency.js";

const SingleTier = ({ tier, setShowSales, setShowPay, setProduct }) => {
  const buyOption = () => (setProduct(tier), setShowPay(true));

  return (
    <TierContainer color={tier.color}>
      <div>
        <Fade>
          <h2>
            <span>Taller</span> <b>{tier.title}</b>
          </h2>
          <H3>{tier.subtitle}</H3>
        </Fade>
        <Fade>
          <Price>
            <span>
              {tier.title === "empresarial" && <PreSpan>desde </PreSpan>}
              {currency(tier.price, {
                precision: 0,
                symbol: "$",
                formatWithSymbol: true,
              }).format()}
              <span>MXN</span>
            </span>
            <span>
              {tier.originalPrice
                ? currency(tier.originalPrice, {
                    precision: 0,
                    symbol: "$",
                    formatWithSymbol: true,
                  }).format()
                : null}
            </span>
          </Price>
          {tier.title !== "empresarial" ? (
            <Button onClick={buyOption}>Ver más</Button>
          ) : (
            <Button onClick={setShowSales}>Contacta a un asesor</Button>
          )}
        </Fade>
      </div>
    </TierContainer>
  );
};

export default SingleTier;

const PreSpan = styled.div`
  font-size: 2rem;
  display: inline-flex;
  margin-right: 5px;
  @media (max-width: 1100px) {
    font-size: 1.7rem;
  }
`;

const TierContainer = styled.div`
  grid-column-end: span 3;
  & > div {
    padding: 8%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100% - 80px);
    div:nth-of-type(3) {
      ::after {
        content: " ";
        height: 2px;
        display: flex;
        margin-top: 40px;
        width: 100%;
        opacity: 0.8;
        background-color: ${(props) => props.theme.colors.foreground_lower};
      }
    }
  }
  ::before {
    content: " ";
    display: flex;
    border-radius: 3px 3px 0px 0px;
    height: 80px;
    width: 100%;
    background-color: ${(props) =>
      props.color ? props.color : props.theme.colors.background};
  }
  h2 {
    font-size: 2.6rem;
    color: ${(props) => props.theme.colors.accent};
    font-weight: 400;
    padding-bottom: 20px;
    b {
      font-weight: 500;
    }
  }
  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.foreground_lowest};
    opacity: 0.6;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size: 2.3rem;
    }

    h3 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 950px) {
    grid-column-end: span 1;
    grid-row: 1;
    h2 {
      font-size: 2.2rem;
      margin-top: 15px;
    }
    h3 {
      font-size: 1.7rem;
    }
    & > div {
      height: calc(100% - 60px);
      padding: 6%;
      div:nth-of-type(3) {
        ::after {
          display: none;
        }
      }
    }
    &::before {
      height: 60px;
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.7rem;
  margin: 10% 0;
  align-items: flex-end;
  line-height: 100%;
  span {
    span {
      font-size: 2rem;
    }
    :nth-of-type(1) {
      color: ${(props) => props.theme.colors.accent};
    }
    :nth-of-type(2) {
      color: ${(props) => props.theme.colors.foreground_lowest};
      opacity:0.8;
      text-decoration: line-through;
      font-size: 1.7rem;
    }
  }
  @media (max-width: 1300px) {
    font-size: 2.5rem;
    span {
      span {
        font-size: 1.5rem;
      }
      :nth-of-type(2) {
        font-size: 1.3rem;
      }
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding-right: 6px;
  padding-left: 6px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.foreground};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) =>
        !props.disabled
          ? darken(0.1, props.theme.colors.accent)
          : props.theme.colors.foreground_low};
    }
  }
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;