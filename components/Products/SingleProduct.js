import styled from "styled-components";
import { darken } from "polished";
import { P } from "components/shared/Dangerously";
import Link from "next/link";

const SingleProduct = ({
  color,
  title,
  type,
  id,
  description,
  setShowSales,
  setProduct,
  buttonColor,
  showStudioLink,
}) => {
  const assignSales = (id) => {
    setShowSales(true);
    setProduct(id);
    console.log("assignSales called with product: " + id);
  };

  return (
    <ProductContainer color={color}>
      <div>
        <div>
          <span>{type}</span>
          <h2>{title}</h2>
          <P>{description}</P>
        </div>
        {id === "Taller Covid" ? (
          <Link href="/tallerescovid" passHref>
            <a>
              <Button cta>Ver más</Button>
            </a>
          </Link>
        ) : id === "Estudio" && showStudioLink ? (
          <Link href="/escenariosderiesgo" passHref>
            <a>
              <Button cta>Ver más</Button>
            </a>
          </Link>
        ) : (
          <Button buttonColor={buttonColor} onClick={() => assignSales(id)}>
            Pedir informes
          </Button>
        )}
      </div>
    </ProductContainer>
  );
};

export default SingleProduct;

const Button = styled.button`
  width: 100%;
  padding-right: 6px;
  padding-left: 6px;
  background-color: ${(props) =>
    props.cta
      ? props.theme.colors.cta
      : props.buttonColor
      ? props.buttonColor
      : props.theme.colors.home.accent};
  color: ${(props) =>
    props.cta ? props.theme.colors.background : props.theme.colors.foreground};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) =>
        props.cta
          ? darken(0.1, props.theme.colors.cta)
          : props.buttonColor
          ? darken(0.1, props.buttonColor)
          : darken(0.1, props.theme.colors.home.accent)};
    }
  }
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;

const ProductContainer = styled.div`
  grid-column-end: span 3;
  box-shadow: ${(props) =>
    `-4px -6px 11px ${props.theme.colors.lightlight}, 
    4px 4px 12px ${props.theme.colors.lightshadow}`};
  border-radius: 3px;
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
    h2 {
      font-size: 2.4rem;
      font-weight: 400;
      padding-top: 10px;
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
  span {
    font-size: 1.2rem;
    line-height: 125%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 25px;
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
      margin-top: 0px;
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
  @media (max-width: 700px) {
    h2 {
      font-size: 2rem !important;
      font-weight: 400 !important;
    }
  }
`;
