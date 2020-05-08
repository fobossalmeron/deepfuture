import styled from "styled-components";

const MainGrid = styled.section`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 25px;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  display: grid;
  padding: ${(props) => (props.notoppadding ? "0% 0% 7% 0%" : "7% 0%")};
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
`;

export default MainGrid;
