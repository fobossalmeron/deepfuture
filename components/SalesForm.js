import { useEffect } from "react";
import styled from "styled-components";
import { H1, H2 } from "components/shared/Dangerously";
import SalesCollector from "components/shared/SalesCollector";

function SalesForm() {
  return (
    <Form>
      <Column>
        <h4>Nosotros te contactaremos</h4>
        <p>
          Déjanos tus datos y te contactará un asesor de ventas en las próximas
          24 horas.
        </p>
      </Column>
      <Column>
        <SalesCollector />
      </Column>
    </Form>
  );
}

export default SalesForm;

const Form = styled.div`
  background-color: ${(props) => props.theme.colors.accent};
  grid-column: 3 / span 8;
  border-radius: 5px;
  padding: 5% 6.5%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all 0.3s ease-in;
  pointer-events: auto;
`;

const Column = styled.div`
  max-width: 330px;
  width: 100%;
  color: ${(props) => props.theme.colors.foreground};
  :nth-of-type(1) {
    padding-right: 5%;
  }
  h4 {
    font-weight: 300;
    font-size: 3rem;
    margin-bottom: 23px;
    b {
      font-weight: 500;
    }
  }
  p {
    opacity: 1 !important;
  }
`;
