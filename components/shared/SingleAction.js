import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";

const SingleAction = ({ children, className }) => (
  <SingleActionContainer className={className}>
    <div>{children}</div>
  </SingleActionContainer>
);

const SingleActionContainer = styled(MainGrid)`
  min-height: 93vh;
  align-items: center;
  padding-top: 13%;
  & > div {
    max-width: 340px;
    color: ${(props) => props.theme.colors.foreground};
    grid-column: 2 / span 10;
    padding-bottom: 7%;
    p {
      margin: 20px 0;
    }
    h3 {
      font-size: 3.6rem;
    }
  }
  @media (max-width: 600px) {
    & > div {
      grid-column: 1 / span 12;
      h3 {
        font-size: 3rem;
      }
    }
  }
`;

export default SingleAction;
