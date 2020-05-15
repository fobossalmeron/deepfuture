import styled from "styled-components";

const MainGrid = styled.section`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 25px;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  display: grid;
  padding-right:2%;
  padding-left: 2%;
  position: relative;
  h1 {
    font-size: 4.65rem;
    line-height: 135%;
    margin-bottom: 3%;
  }
  p {
    grid-column: 7 / span 5;
    position: relative;
    opacity: 0.8;
  }
  @media (max-width: 1000px) {
    grid-gap: 2%;
  }
  @media (max-width: 600px) {
    padding-right: 5%;
    padding-left: 5%;
  }
`;

export default MainGrid;
