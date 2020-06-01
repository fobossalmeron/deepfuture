import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";
import Title from "components/shared/Title";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darken } from "polished";
import { P } from "components/shared/Dangerously";
import Link from "next/link";

function SingleProduct({
  color,
  title,
  type,
  id,
  description,
  setShowSales,
  setProduct,
}) {
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
        ) : (
          <Button onClick={() => assignSales(id)}>Pedir informes</Button>
        )}
      </div>
    </ProductContainer>
  );
}

function Products({ setShowSales, setProduct }) {
  const theme = useContext(ThemeContext);

  //Tiers are inside so we can access theme from styled-components
  const products = [
    {
      title:
        "Escenarios De Riesgo En Tiempos De La Cuarta Transformación De México",
      type: "Estudio",
      id: "Estudio",
      description:
        "Nuestro más reciente trabajo de investigación es un estudio de prospectiva a 10 años (2019-2030) que analiza la vida económica, social, ambiental y política del México en el presente y futuro.<br/>Todos los talleres que impartimos utilizan la información de este estudio para tener una perspectiva holística del país a corto y largo plazo.  ",
    },
    {
      title:
        "Genera certidumbre en la crisis económica del COVID-19 en tiempos de la 4T en México",
      type: "Talleres",
      id: "Taller Covid",
      description:
        "Con la irrupción de la pandemia del COVID-19, todas las señales indican que nos adentramos en una etapa que impondrá su sello sobre lo que resta del siglo. <br/> Encuentra claridad y certidumbre en estos tiempos de crisis humanitarias y financieras",
      color: theme.colors.accent,
    },
    {
      title: "Estrategia y problemática a largo plazo con empresarios",
      type: "Talleres",
      id: "Taller Empresarios",
      description:
        "Junto a un grupo de empresarios, analiza los escenarios futuros de incertidumbre que pueden afectar a tu organización y su planeación en el contexto actual de México.<br/>De la mano de expertos, planea a largo plazo y construye un negocio saludable para los años venideros.",
      color: theme.colors.home.tier1,
    },
    {
      title: "Estrategia para corporativos y grandes empresas",
      type: "Talleres",
      id: "Taller Corporativos",
      description:
        "Recibe atención personalizada de nuestro equipo de expertos exclusivamente para tu organización. Analiza la información indicada junto a todo tu equipo de trabajo para desarrollar un plan de acción a largo plazo dentro de tu organización. <br/>Comunica efectivamente las prioridades de tu negocio brindando herramientas que empoderen a tus trabajadores.",
      color: theme.colors.home.tier2,
    },
  ];

  return (
    <TiersSection>
      <Title>
        <h2>
          Contempla insights <b>visionarios</b> en tu planeación
          <b> estratégica</b>
        </h2>
        <p>
          Repiensa los problemas de tu organización a corto y largo plazo con
          información relevante para empresarios ante futuros complejos e
          inciertos. Conoce nuestras soluciones.
        </p>
      </Title>
      <TiersGrid>
        {products.map((product, i) => (
          <SingleProduct
            setShowSales={setShowSales}
            setProduct={setProduct}
            key={"products" + i}
            {...product}
          />
        ))}
      </TiersGrid>
    </TiersSection>
  );
}

export default Products;

const Button = styled.button`
  width: 100%;
  padding-right: 6px;
  padding-left: 6px;
  background-color: ${(props) =>
    props.cta ? props.theme.colors.cta : props.theme.colors.home.accent};
  color: ${(props) =>
    props.cta ? props.theme.colors.background : props.theme.colors.foreground};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) =>
        !props.cta
          ? darken(0.1, props.theme.colors.home.accent)
          : darken(0.1, props.theme.colors.cta)};
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

const TiersGrid = styled(MainGrid)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  & > div {
    &:nth-of-type(1) {
      grid-column-start: 5;
    }
    &:nth-of-type(2) {
      grid-column-start: 8;
    }
    &:nth-of-type(3) {
      grid-column-start: 2;
    }
  }
  @media (max-width: 1300px) {
    grid-column-gap: 18px;
  }
  @media (max-width: 1200px) {
    & > div {
      grid-column-end: span 4;
      &:nth-of-type(1) {
        grid-column-start: 4;
      }
      &:nth-of-type(2) {
        grid-column-start: 8;
      }
      &:nth-of-type(3) {
        grid-column-start: 2;
      }
    }
  }
  @media (max-width: 950px) {
    & > div {
      grid-column-end: span 6;
      &:nth-of-type(1) {
        grid-column-start: 1;
      }
      &:nth-of-type(2) {
        grid-column-start: 7;
      }
      &:nth-of-type(3) {
        grid-column-start: 1;
        grid-row: 2 / span 1;
      }
      &:nth-of-type(4) {
        grid-column-start: 7;
        grid-row: 2 / span 1;
      }
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 20%;
    & > div {
      grid-column-end: span 12;
      &:nth-of-type(1) {
        grid-column-start: 1;
      }
      &:nth-of-type(2) {
        grid-column-start: 1;
        grid-row-start: 2;
      }
      &:nth-of-type(3) {
        grid-column-start: 1;
        grid-row-start: 3;
      }
      &:nth-of-type(4) {
        grid-column-start: 1;
        grid-row-start: 4;
      }
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 20%;
    & > div {
      grid-column-end: span 12;
      &:nth-of-type(1) {
        grid-column-start: 1;
      }
      &:nth-of-type(2) {
        grid-column-start: 1;
        grid-row-start: 2;
      }
      &:nth-of-type(3) {
        grid-column-start: 1;
        grid-row-start: 3;
      }
      &:nth-of-type(4) {
        grid-column-start: 1;
        grid-row-start: 4;
      }
    }
  }
  @media (max-width: 500px) {
    padding-bottom: 30%;
  }
`;

const TiersSection = styled.section`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  width: 100%;
  padding-bottom: 6%;
  padding-top: 6%;
  h2 {
    font-size: 4rem;
    max-width: 700px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  p {
    max-width: 600px;
  }
  @media (max-width: 1100px) {
    padding-bottom: 10%;
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: 3.4rem;
    }
  }
  @media (max-width: 1000px) {
    grid-row-gap: 2rem;
  }
  @media (max-width: 950px) {
    h2 {
      font-size: 3rem;
      grid-column: 1 / span 12;
      max-width: 530px;
    }
  }
  @media (max-width: 600px) {
    padding-top: 45px;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 2.7rem;
    }
  }
`;
