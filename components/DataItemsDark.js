import styled from "styled-components";
import DataItem from "components/shared/DataItem";
import Time from "public/assets/img/layout/icons/time.svg";
import MainGrid from "components/shared/MainGrid";

const items = [
  {
    title: "Organiza la información<br/> y úsala para tu beneficio",
    description:
      "Aprendamos juntos del pasado y el presente para conocer mejor el futuro.",
    icon: <Time />,
  },
  {
    title: "Hazlo desde casa, <br/>en este momento",
    description:
      "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
    icon: <Time />,
  },
  {
    title: "Anticipa riesgos <br/>y oportunidades",
    description:
      "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
    icon: <Time />,
  },
  {
    title: "Asesórate con expertos",
    description:
      "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
    icon: <Time />,
  },
  {
    title: "Dimensiona el problema",
    description:
      "This is content describing the first benefit of your product or service. It should act as a supporting description of the benefit statements you wrote above.",
    icon: <Time />,
  },
];

function DataItemsWhite() {
  return (
    <>
      <DataSection>
        <div />
        <div />
        {items.map(
          (item, i) =>
            i < 3 && (
              <DataItem
                dark
                key={"dataItemWhite" + i}
                item={item}
                columns={3}
              />
            )
        )}
      </DataSection>
      <DataSection notoppadding>
        <div /> <div />
        <div />
        {items.map(
          (item, i) =>
            i > 2 && (
              <DataItem
                dark
                key={"dataItemWhite" + i}
                item={item}
                columns={3}
              />
            )
        )}
      </DataSection>
    </>
  );
}

export default DataItemsWhite;

const DataSection = styled(MainGrid)`
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
`;
