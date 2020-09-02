import styled from "styled-components";

const Author = ({ src, name, date }) => (
  <AuthorContainer>
    <img src={src} alt={name} />
    <span>{name}</span>
    <h4>{date}</h4>
  </AuthorContainer>
);

export default Author;

const AuthorContainer = styled.div`
  font-size: 1.4rem;
  display: grid;
  text-align: left;
  grid-template-columns: 50px auto;
  grid-template-rows: 19px 19px;
  position: relative;
  padding-top: 20px;
  margin-top: 30px;
  max-width: 220px;
  margin-bottom: 10%;
  color: ${(props) => props.theme.colors.foreground_low};
  &::before {
    content: " ";
    height: 2px;
    background-color: ${(props) => props.theme.colors.foreground_low};
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 1px;
    transform: translateX(-50%);
  }
  span {
    margin-bottom: 5px;
    font-weight: 400;
  }
  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    grid-row: 1 / span 2;
    margin-top: 3px;
  }
  h4 {
    margin-top: 0px !important;
  }
`;
