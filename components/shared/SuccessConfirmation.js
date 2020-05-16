import styled, { withTheme } from "styled-components";
import Mail from "public/assets/img/layout/icons/mail.svg";
import CircleIcon from "components/shared/CircleIcon";

function SuccessConfirmation({ children, className, theme }) {
  return (
    <Gracias className={className}>
      <Icon color={theme.colors.accent}>
        <Mail />
      </Icon>
      {children}
    </Gracias>
  );
}

export default withTheme(SuccessConfirmation);

const Icon = styled(CircleIcon)`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  svg {
    padding: 22%;
  }
  @media (max-width: 1300px) {
    width: 80px;
    height: 80px;
  }
`;

const Gracias = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h5 {
    font-size: 2.4rem;
    margin: 10px 0;
    font-weight: 400;
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
  }
  @media (max-width: 700px) {
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;
