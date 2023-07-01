import { ButtonSt } from './Button.styled';

export const Button = ({ onClickLoadMore }) => {
  return (
    <ButtonSt type="button" onClick={onClickLoadMore}>
      Load more
    </ButtonSt>
  );
};
