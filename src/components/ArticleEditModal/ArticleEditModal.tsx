import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AddArticleModal } from '../AddArticleModal/AddArticleModal';
interface ArticleEditModalProps {
  isAuth: boolean;
}

export const ArticleEditModal = ({ isAuth }: ArticleEditModalProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        display={isAuth ? 'block' : 'none'}
        variant='white'
        onClick={open}
      >
        Редактировать
      </Button>
      <AddArticleModal opened={opened} close={close} />
    </>
  );
};
