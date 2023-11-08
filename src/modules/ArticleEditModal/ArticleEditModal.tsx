import { ActionIcon, Box, Button, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsTrash3 } from 'react-icons/bs';
import classes from './ArticleEditModal.module.css';
interface ArticleEditModalProps {
  isAuth: boolean;
}

export const ArticleEditModal = ({ isAuth }: ArticleEditModalProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button display={isAuth ? 'block' : 'none'} variant='white'>
        Редактировать
      </Button>
      <Box display={isAuth ? 'block' : 'none'}>
        <ActionIcon variant='unstyled' c='red' onClick={open}>
          <BsTrash3 />
        </ActionIcon>
        <Modal opened={opened} onClose={close}>
          <Stack align='center'>
            <Text className={classes.modalText}>
              Вы уверены, что хотите удалить эту статью?
            </Text>
            <Button className={classes.modalButton}>Удалить</Button>
          </Stack>
        </Modal>
      </Box>
    </>
  );
};
