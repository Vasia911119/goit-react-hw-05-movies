import styled from "styled-components";

export const ButtonStyled = styled.button`
display:flex;
justify-content: center;
margin: 10px auto;
  width: 80px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: green;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 160px;
    &:hover,
    :focus {
      background-color: tomato;
    }
`;