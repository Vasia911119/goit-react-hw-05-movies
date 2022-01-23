import propTypes from 'prop-types';
import { ButtonStyled } from './LoadMoreButton.styled';

const Button = ({ onClick }) => <ButtonStyled onClick={onClick}>load more</ButtonStyled>;

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default Button;