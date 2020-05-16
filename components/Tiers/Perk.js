
import styled from "styled-components";
import Check from "public/assets/img/layout/check.svg";
import Uncheck from "public/assets/img/layout/uncheck.svg";

const Perk = ({ perk }) => (
  <Stat>
    {typeof perk == "string" && perk}
    {perk === true && <Check />}
    {perk === false && <Uncheck />}
  </Stat>
);

export default Perk;

const Stat = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.accent};
  @media (max-width: 950px) {
    padding: 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      &::before {
        width: 15px;
        content: " ";
        height: 15px;
        position: relative;
        display: block;
        border-radius: 50%;
        align-self: center;
        margin-right: 20px;
      }
      &:nth-of-type(3n - 1) {
        &:before {
          background-color: #1c4794;
        }
        border: 2px solid ${(props) => props.theme.colors.foreground_lower};
        border-top: 0;
        border-bottom: 0;
      }
      &:nth-of-type(3n - 2) {
        &:before {
          background-color: #62af9a;
        }
      }
      &:nth-of-type(3n - 3) {
        &:before {
          background-color: ${(props) => props.theme.colors.background};
        }
      }
  }
`;