import { ActionIcon, Box, Button, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BsTrash3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import classes from './ArticleDeleteModal.module.css';

export const ArticleDeleteModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const roles = useSelector((state: RootState) => state.roles);
  const isAdmin = roles.includes('ROLE_ADMIN');

  return (
    <>
      <Box display={isAdmin ? 'block' : 'none'}>
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
