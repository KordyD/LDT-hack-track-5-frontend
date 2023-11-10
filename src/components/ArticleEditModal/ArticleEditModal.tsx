import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AddArticleModal } from '../AddArticleModal/AddArticleModal';

export const ArticleEditModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const roles = useSelector((state: RootState) => state.roles);
  const isAdmin = roles.includes('ROLE_ADMIN');

  return (
    <>
      <Button
        display={isAdmin ? 'block' : 'none'}
        variant='white'
        onClick={open}
      >
        Редактировать
      </Button>
      <AddArticleModal opened={opened} close={close} />
    </>
  );
};
