import styled from "styled-components";

export const Header = styled.header`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: green;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  /* display: inline-block; */
  width: 48px;
  height: 48px;
  border: 0;
  display: inline-block;
  min-width: 80px;
  padding: 8px 16px;
  border-radius: 2px;
  border: 0;
  background-color: tomato;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;