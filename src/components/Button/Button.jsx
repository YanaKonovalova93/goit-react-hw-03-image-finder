import PropTypes from 'prop-types';

import { ButtonSt } from './Button.styled';

export const Button = ({ onClickLoadMore }) => {
  return (
    <ButtonSt type="button" onClick={onClickLoadMore}>
      Load more
    </ButtonSt>
  );
};


Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};