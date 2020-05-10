import styled from "styled-components";

export const Message = styled.div`
  color: ${(props) =>
    props.error
      ? props.theme.colors.error
      : props.success
      ? props.theme.colors.successf
      : props.theme.colors.foreground};
  font-size: ${(props) => (props.success ? "1.8rem" : "1.5rem")};
  padding-bottom: 5px;
  ${(props) =>
    props.short &&
    !props.success &&
    `position: absolute;  
     bottom: -30px;
     padding: 10px;
     border-radius: 3px;
     background-color: ${props.theme.colors.background};
    `};
  ${(props) =>
    props.short &&
    props.success &&
    `width: 100%;
     text-align:right;
    `};
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.5rem;
  }
`;

export const Label = styled.label`
  width: ${(props) => (props.short ? "50%" : "100%")};
  margin: 0;
  span {
    font-size: 0;
    height: 0;
    width: 0;
    position: absolute;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 18px 13px 26px;
  line-height: 100%;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: ${(props) => (props.short ? "4px 0px 0px 4px" : "4px")};
  border: none;
  font-size: 1.7rem;
  margin: 4px 0;
  height: 48px;
  color: ${(props) => props.theme.colors.foreground_lowest};
  -webkit-appearance: textfield;
  appearance: textfield;
  ::placeholder {
    padding-top: 4px;
    color: #31302e;
    opacity: 0.5;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 13px 18px 13px 26px;
  line-height: 100%;
  background-color: ${(props) => props.theme.colors.foreground};
  border-radius: ${(props) => (props.short ? "4px 0px 0px 4px" : "4px")};
  border: none;
  font-size: 1.7rem;
  margin: 4px 0;
  height: 48px;
  color: ${(props) => props.theme.colors.foreground_lowest};
`;

export const Button = styled.button`
  padding: 14px 0%;
  margin: 4px 0;
  text-align: center;
  width: ${(props) => (props.short ? "50%" : "100%")};
  background-color: ${(props) => props.theme.colors.cta};
  color: ${(props) => props.theme.colors.background};
  border: 0;
  font-size: 1.7rem;
  border-radius: ${(props) => (props.short ? "0px 4px 4px 0px" : "4px")};
  cursor: pointer;
  transition: 0.3s ease all;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.colors.success};
    }
  }
`;

export const selectStyles = {
  option: (provided) => ({
    ...provided,
    color: "#4F4F4F",
    fontSize: "1.7rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#4F4F4F",
  }),
  container: (provided) => ({
    ...provided,
    margin: "4px 0",
    height: "48px",
  }),
  control: (provided) => ({
    ...provided,
    height: "100%",
    border: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "1px 18px 13px 26px",
    lineHeight: "100%",
  }),
  placeholder: (provided) => ({
    ...provided,
    paddingTop: "4px",
    color: "#31302e",
    opacity: 0.5,
    padding: 0,
    margin: 0,
    fontSize: "1.7rem",
  }),
};

export const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
