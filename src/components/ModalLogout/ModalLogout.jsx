import { useCloseModalLogout } from 'components/modalHooks/hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logout } from 'redux/auth/auth-operations';
import { getIsError } from 'redux/auth/auth-selectors';
import {
  CancelButton,
  Content,
  LogoutButton,
  Modal,
  Title,
} from './ModalLogout.styled';
import { Box } from './ModalLogout.styled';



export const ModalLogout = () => {
  const closeModal = useCloseModalLogout();
  const dispatch = useDispatch();
  const error = useSelector(getIsError);

  const handleLogout = () => {
    dispatch(logout());
  };
  if (error) {
    toast.error('Sorry,something went wrong,try again');
  }

  useEffect(() => {
    const escapeModal = event => {
      if (event.code === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    };
    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  });

  const closBackdrop = event => {
    if (event.target.nodeName !== 'BUTTON') {
      closeModal();
    }
  };

  return (
    <Modal onClick={closBackdrop}>
      <Content>
        <Title>Do you want to logout?</Title>
        <Box>
          <CancelButton onClick={handleLogout}>Yes</CancelButton>
          <LogoutButton onClick={closeModal}>Cancel</LogoutButton>
        </Box>
      </Content>
    </Modal>
  );
};
