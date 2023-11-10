import { ActionIcon, Box, Button, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsTrash3 } from 'react-icons/bs';
import classes from './ArticleDeleteModal.module.css';
interface ArticleDeleteModalProps {
  isAuth: boolean;
}

export const ArticleDeleteModal = ({ isAuth }: ArticleDeleteModalProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
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