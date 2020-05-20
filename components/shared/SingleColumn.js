import styled from "styled-components";
import MainGrid from "components/shared/MainGrid";

const SingleColumn = ({ children, className }) => (
  <SingleColumnContainer className={className}>
    <div>{children}</div>
  </SingleColumnContainer>
);

const SingleColumnContainer = styled(MainGrid)`
  min-height: 93vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 6%;
  font-weight: 300;
  font-size: 2rem;
  line-height:135%;
  & > div {
    color: ${(props) => props.theme.colors.foreground};
    padding-bottom: 7%;
    max-width: 660px;
    h1 {
      font-size: 5rem;
      line-height: 120%;
    }
    h2 {
      font-size: 2.7rem;
      color: ${(props) => props.theme.colors.foreground_low};
      line-height: 135%;
      font-weight: 300;
    }
    h3 {
      font-size: 3rem;
      margin-bottom: 20px;
      max-width: 600px;
      line-height: 125%;
      margin: 37px 0px 20px;
      b{
      }
    }
    h4{
      font-size:inherit;
      line-height: 100%;
      margin-bottom:0;
      margin-top:10px;
    }
    a{
      color: ${(props) => props.theme.colors.foreground};
    }
    p {
      margin: 20px 0;
      max-width: 600px;
      opacity: 1;
      color: ${(props) => props.theme.colors.foreground_low};
      b {
        color: ${(props) => props.theme.colors.foreground};
      }
    }
    & > img {
      width: 100%;
      max-width: 600px;
    }
    ul{
      font-size:inherit;
      line-height: inherit;
      li {
      display: block;
      margin-bottom: 5px;
      &:before {
        content: " ";
        width: 10px;
        height: 10px;
        margin-top: 5px;
        border-radius: 100%;
        display: inline-block;
        margin-right: 10px;
        background-color: ${(props) => props.theme.colors.accent};
      }
    }
    } 
    ol {
      margin-top: 5px;
      counter-reset: item;
      margin-bottom: 5px;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.foreground_low};
      li {
        display: block;
        margin-bottom: 3px;
        &:before {
          content: counters(item, ".") ". ";
          counter-increment: item;
          color: ${(props) => props.theme.colors.accent};
          font-weight: 400;
        }
        ol {
          margin: 20px 0 20px 10px;
          li {
          }
        }
      }
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

export default SingleColumn;
