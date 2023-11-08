import {
  Button,
  Group,
  Modal,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { AiOutlinePaperClip } from 'react-icons/ai';
import classes from './AddArticleModal.module.css';

interface AddArticleModalProps {
  opened: boolean;
  close: () => void;
}

export const AddArticleModal = ({ opened, close }: AddArticleModalProps) => {
  return (
    <Modal
      title='Добавить статью'
      opened={opened}
      onClose={close}
      classNames={{ title: classes.modalTitle }}
    >
      <Stack>
        <TextInput placeholder='Название' variant='primary' />
        <Textarea
          placeholder='Описание'
          classNames={{
            root: classes.modalInputRoot,
            input: classes.modalAreaInput,
          }}
        />
        <Group justify='center'>
          <Button
            rightSection={<AiOutlinePaperClip />}
            className={classes.modalButton}
          >
            Прикрепить файл
          </Button>
          <Button className={classes.modalButton}>Сохранить</Button>
        </Group>
      </Stack>
    </Modal>
  );
};
