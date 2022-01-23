import styled from "styled-components";

export const Button = styled.button`
  margin: 10px 0;
  padding: 5px 15px;
  border-radius: 5px;
  color: white;
  background-color: green;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: tomato;
  }
`;