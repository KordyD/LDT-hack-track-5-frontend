import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  Modal,
  Stack,
  Text,
} from '@mantine/core';
import classes from './ModalHistroy.module.css';
import { useDisclosure } from '@mantine/hooks';

interface ModalHistory {
  history: {
    type: string;
    title: string;
    date: string;
    time: string;
    id: number;
  }[];
}

export const ModalHistory = ({ history }: ModalHistory) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box className={classes.wrapperHistory}>
        <Button onClick={open} className={classes.history}>
          История просмотра
        </Button>
      </Box>
      <Modal
        radius='xl'
        size='auto'
        opened={opened}
        onClose={close}
        title='История'
      >
        <Stack>
          {history.map((item) => (
            <Box key={item.id}>
              <Group p={10} gap={45}>
                <Anchor>{item.type}</Anchor>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
                <Text>{item.time}</Text>
              </Group>
              <Divider />
            </Box>
          ))}

          <Button fullWidth variant='transparent'>
            Смотреть всё
          </Button>
        </Stack>
      </Modal>
    </>
  );
};
